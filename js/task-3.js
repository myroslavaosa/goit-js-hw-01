function getElementWidth(content, padding, border) {
      const contentWidth = parseFloat(content) || 0;
  const paddingWidth = parseFloat(padding) || 0;
  const borderWidth = parseFloat(border) || 0;

  const totalWidth = contentWidth + 2 * (paddingWidth + borderWidth);

  return `${totalWidth}px`;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200