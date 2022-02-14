import { Helmet } from 'react-helmet'
import './Projects.css'
export default function Projects() {
  return (
    <>
      <Helmet>
        <title>home</title>
      </Helmet>
      <section className="section-projects">
        <div style={{ maxWidth: "25%", padding: "2rem" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 700 }}>Hi, I'm Pete.</h1>
          <p>description</p>

        </div>
        <div style={{ maxWidth: "25%", padding: "2rem" }}>
          <img width="100%" style={{ objectFit: "fit", borderRadius: "50%" }}></img>
        </div>
      </section>
    </>
  )
}