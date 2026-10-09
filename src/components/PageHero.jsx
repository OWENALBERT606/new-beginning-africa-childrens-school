function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        {eyebrow && <p className="eyebrow eyebrow--light">{eyebrow}</p>}
        <h1>{title}</h1>
        {text && <p className="page-hero__text">{text}</p>}
        {children}
      </div>
    </section>
  )
}

export default PageHero
