const getHexagonPoints = (view: number, tilt: boolean) => {
  const r = view / 2;
  const offset = tilt ? Math.PI / 6 : 0;
  const points = Array(6)
    .fill('')
    .map((_, i) => {
      const angle = (Math.PI / 3) * i + offset;
      const x = r + r * Math.cos(angle);
      const y = r + r * Math.sin(angle);
      return `${x},${y}`;
    });
  return points.join(' ');
};

const getOctagonPoints = (view: number, tilt: boolean) => {
  const r = view / 2;
  const offsetAngle = tilt ? 0 : Math.PI / 8;
  const points = Array(8)
    .fill('')
    .map((_, i) => {
      const angle = (Math.PI / 4) * i - offsetAngle;
      const x = r + r * Math.cos(angle);
      const y = r + r * Math.sin(angle);
      return `${x},${y}`;
    });
  return points.join(' ');
};

const getSquarePoints = (view: number, tilt: boolean) => {
  const r = view / 2;
  const offsetAngle = tilt ? 0 : Math.PI / 4;
  const points = Array(4)
    .fill('')
    .map((_, i) => {
      const angle = (Math.PI / 2) * i - offsetAngle;
      const x = r + r * Math.cos(angle);
      const y = r + r * Math.sin(angle);
      return `${x},${y}`;
    });
  return points.join(' ');
};

export { getHexagonPoints, getOctagonPoints, getSquarePoints };
