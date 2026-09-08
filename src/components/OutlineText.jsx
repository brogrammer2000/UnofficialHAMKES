/**
 * Renders one of the extracted Horizon-Bold outline SVGs as the visible glyph,
 * while keeping the real string as accessible text (Horizon is a commercial
 * font we don't have a license to ship, so headings render as vector outlines).
 */
function OutlineText({ src, label, className, as: Tag = 'span', style }) {
  return (
    <Tag className={className} style={style}>
      <img src={src} alt={label} draggable={false} />
    </Tag>
  )
}

export default OutlineText
