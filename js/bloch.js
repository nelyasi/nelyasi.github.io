/* ============================================================
   js/bloch.js  —  Animated Bloch sphere (dark canvas)
   ============================================================ */

(function () {
  const cv = document.getElementById('bloch-canvas');
  if (!cv) return;
  const c = cv.getContext('2d');
  const W = 500, H = 500, ox = 250, oy = 250, R = 185, TX = 0.40;
  let t = 0;

  /* Dark radial background repainted every frame */
  function drawBg() {
    const grad = c.createRadialGradient(ox, oy, 10, ox, oy, R * 1.05);
    grad.addColorStop(0,   '#0d1526');
    grad.addColorStop(0.7, '#080d1a');
    grad.addColorStop(1,   '#050912');
    c.beginPath();
    c.arc(ox, oy, R * 1.06, 0, Math.PI * 2);
    c.fillStyle = grad;
    c.fill();
  }

  /* 3-D → 2-D projection (simple perspective) */
  function p3(x, y, z, ry) {
    const x1 = x * Math.cos(ry) - z * Math.sin(ry);
    const z1 = x * Math.sin(ry) + z * Math.cos(ry);
    const y2 = y * Math.cos(TX) - z1 * Math.sin(TX);
    const z2 = y * Math.sin(TX) + z1 * Math.cos(TX);
    const s  = 1 / (1 + z2 * 0.15);
    return { px: ox + x1 * R * s, py: oy - y2 * R * s };
  }

  /* Great circle through a given normal vector */
  function gc(nx, ny, nz, ry, al, lw) {
    let tx, ty, tz;
    if (Math.abs(nx) < 0.9) { tx = 0; ty = nz; tz = -ny; }
    else                      { tx = -nz; ty = 0; tz = nx; }
    const tl = Math.hypot(tx, ty, tz);
    tx /= tl; ty /= tl; tz /= tl;
    const bx = ny * tz - nz * ty, by = nz * tx - nx * tz, bz = nx * ty - ny * tx;
    c.beginPath(); let f = true;
    for (let a = 0; a <= Math.PI * 2 + .01; a += .035) {
      const cs = Math.cos(a), sn = Math.sin(a);
      const pt = p3(cs * tx + sn * bx, cs * ty + sn * by, cs * tz + sn * bz, ry);
      f ? (c.moveTo(pt.px, pt.py), f = false) : c.lineTo(pt.px, pt.py);
    }
    c.strokeStyle = `rgba(99,179,255,${al})`; c.lineWidth = lw; c.stroke();
  }

  /* Latitude ring at height zl */
  function lr(zl, ry, al) {
    const r = Math.sqrt(Math.max(0, 1 - zl * zl));
    c.beginPath(); let f = true;
    for (let a = 0; a <= Math.PI * 2 + .01; a += .04) {
      const pt = p3(Math.cos(a) * r, Math.sin(a) * r, zl, ry);
      f ? (c.moveTo(pt.px, pt.py), f = false) : c.lineTo(pt.px, pt.py);
    }
    c.strokeStyle = `rgba(99,179,255,${al})`; c.lineWidth = .65; c.stroke();
  }

  /* Axis arrow + label */
  function ax(x, y, z, lb, ry, al, dash) {
    const o = p3(0, 0, 0, ry), e = p3(x * 1.2, y * 1.2, z * 1.2, ry);
    c.beginPath(); c.moveTo(o.px, o.py); c.lineTo(e.px, e.py);
    c.strokeStyle = `rgba(120,195,255,${al})`;
    c.lineWidth = dash ? .8 : 1.1;
    if (dash) c.setLineDash([4, 5]); c.stroke(); c.setLineDash([]);
    if (al > 0.22) {
      const ang = Math.atan2(e.py - o.py, e.px - o.px);
      c.beginPath(); c.moveTo(e.px, e.py);
      c.lineTo(e.px - 9 * Math.cos(ang - .42), e.py - 9 * Math.sin(ang - .42));
      c.lineTo(e.px - 9 * Math.cos(ang + .42), e.py - 9 * Math.sin(ang + .42));
      c.closePath(); c.fillStyle = `rgba(120,195,255,${al})`; c.fill();
    }
    c.fillStyle = `rgba(180,225,255,${Math.min(1, al * 1.3)})`;
    c.font = 'bold 13px "IBM Plex Mono",monospace';
    c.fillText(lb, e.px + 7, e.py + 5);
  }

  /* Main animation frame */
  function frame() {
    c.clearRect(0, 0, W, H);
    drawBg();
    const ry = t * 0.30;

    // Outer sphere ring glow
    c.shadowColor = '#4fa8ff'; c.shadowBlur = 18;
    c.beginPath(); c.arc(ox, oy, R, 0, Math.PI * 2);
    c.strokeStyle = 'rgba(99,179,255,0.55)'; c.lineWidth = 1.4; c.stroke();
    c.shadowBlur = 0;

    // Great circles + latitude rings
    gc(0, 1, 0, ry, .40, 1.1);
    gc(1, 0, 0, ry, .22, .8);
    gc(0, 0, 1, ry, .22, .8);
    [.5, -.5, .82, -.82].forEach(z => lr(z, ry, .12));

    // Axes
    ax(0, 0,  1, '|0⟩',  ry, .85, false);
    ax(0, 0, -1, '|1⟩',  ry, .40, true);
    ax(1, 0,  0, '|+⟩',  ry, .40, true);
    ax(-1, 0, 0, '|−⟩',  ry, .22, true);
    ax(0, 1,  0, '|i⟩',  ry, .40, true);
    ax(0, -1, 0, '|−i⟩', ry, .22, true);

    // State vector coords
    const th = Math.PI / 3.8, phi = t * 0.60;
    const sx = Math.sin(th) * Math.cos(phi);
    const sy = Math.sin(th) * Math.sin(phi);
    const sz = Math.cos(th);
    const o   = p3(0, 0, 0, ry);
    const tip = p3(sx, sy, sz, ry);
    const sh  = p3(sx, sy, 0,  ry);

    // Dashed projection lines
    c.setLineDash([3, 5]);
    c.beginPath(); c.moveTo(tip.px, tip.py); c.lineTo(sh.px, sh.py);
    c.strokeStyle = 'rgba(99,179,255,0.25)'; c.lineWidth = 1; c.stroke();
    c.beginPath(); c.moveTo(o.px, o.py); c.lineTo(sh.px, sh.py);
    c.strokeStyle = 'rgba(99,179,255,0.28)'; c.lineWidth = 1; c.stroke();
    c.setLineDash([]);

    // Precession trail (cyan fade)
    c.beginPath(); let f = true;
    for (let i = 0; i <= 90; i++) {
      const pp = phi - (i / 90) * Math.PI * 1.6;
      const pt = p3(Math.sin(th) * Math.cos(pp), Math.sin(th) * Math.sin(pp), sz, ry);
      const al = (1 - i / 90) * 0.55;
      if (f) { c.moveTo(pt.px, pt.py); f = false; }
      else {
        c.lineTo(pt.px, pt.py);
        c.strokeStyle = `rgba(51,177,255,${al})`;
        c.lineWidth = 1.6; c.stroke();
        c.beginPath(); c.moveTo(pt.px, pt.py);
      }
    }

    // State vector shaft — gradient blue→cyan + glow
    c.shadowColor = '#00cfff'; c.shadowBlur = 22;
    c.beginPath(); c.moveTo(o.px, o.py); c.lineTo(tip.px, tip.py);
    const vg = c.createLinearGradient(o.px, o.py, tip.px, tip.py);
    vg.addColorStop(0, 'rgba(26,86,219,0.8)');
    vg.addColorStop(1, '#00e5ff');
    c.strokeStyle = vg; c.lineWidth = 3; c.stroke();
    c.shadowBlur = 0;

    // Arrowhead
    const ang = Math.atan2(tip.py - o.py, tip.px - o.px);
    c.shadowColor = '#00cfff'; c.shadowBlur = 14;
    c.beginPath(); c.moveTo(tip.px, tip.py);
    c.lineTo(tip.px - 13 * Math.cos(ang - .38), tip.py - 13 * Math.sin(ang - .38));
    c.lineTo(tip.px - 13 * Math.cos(ang + .38), tip.py - 13 * Math.sin(ang + .38));
    c.closePath(); c.fillStyle = '#00e5ff'; c.fill();
    c.shadowBlur = 0;

    // Tip glow rings
    c.beginPath(); c.arc(tip.px, tip.py, 14, 0, Math.PI * 2);
    c.fillStyle = 'rgba(0,229,255,0.08)'; c.fill();
    c.beginPath(); c.arc(tip.px, tip.py, 9, 0, Math.PI * 2);
    c.fillStyle = 'rgba(0,229,255,0.15)'; c.fill();
    c.shadowColor = '#00e5ff'; c.shadowBlur = 18;
    c.beginPath(); c.arc(tip.px, tip.py, 5, 0, Math.PI * 2);
    c.fillStyle = '#00e5ff'; c.fill();
    c.shadowBlur = 0;

    // Label |ψ⟩
    c.fillStyle = '#7df4ff';
    c.font = 'bold 14px "IBM Plex Mono",monospace';
    c.fillText('|ψ⟩', tip.px + 11, tip.py - 8);

    // Origin dot
    c.beginPath(); c.arc(o.px, o.py, 3.5, 0, Math.PI * 2);
    c.fillStyle = 'rgba(99,179,255,0.55)'; c.fill();

    t += 0.010;
    requestAnimationFrame(frame);
  }

  frame();
})();
