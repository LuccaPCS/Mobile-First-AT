export default function Testimonial({ children }) {
  return (
    <div>
      <h2 style={{ margin: "1rem 0" }}>Depoimento</h2>
      <blockquote>{children}</blockquote>
    </div>
  );
}
