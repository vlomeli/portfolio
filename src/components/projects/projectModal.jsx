import { useEffect, useState } from "react";
import "./projectModal.css";

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 4h6v6m0-6-9 9" />
      <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
    </svg>
  );
}

function ArrowIcon({ direction }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={direction === "next" ? "m9 18 6-6-6-6" : "m15 18-6-6 6-6"} />
    </svg>
  );
}

function ProjectModal({ project, onClose }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = project.images?.filter(Boolean) ?? [];
  const hasGallery = images.length > 1;

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (hasGallery && event.key === "ArrowRight") {
        setActiveImage((index) => (index + 1) % images.length);
      }
      if (hasGallery && event.key === "ArrowLeft") {
        setActiveImage((index) => (index - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [hasGallery, images.length, onClose]);

  const showPrevious = () =>
    setActiveImage((index) => (index - 1 + images.length) % images.length);
  const showNext = () => setActiveImage((index) => (index + 1) % images.length);

  return (
    <div className="project-modal-backdrop" onMouseDown={onClose}>
      <section
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
            <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
              <span aria-hidden="true">×</span>
            </button>

            <div className={`modal-gallery ${images.length ? "" : "modal-gallery-empty"}`}>
              {images.length ? (
                <>
                  <img src={images[activeImage]} alt={`${project.title} preview ${activeImage + 1}`} />
                  {hasGallery && (
                    <>
                      <button className="gallery-control previous" type="button" onClick={showPrevious} aria-label="Previous image">
                        <ArrowIcon direction="previous" />
                      </button>
                      <button className="gallery-control next" type="button" onClick={showNext} aria-label="Next image">
                        <ArrowIcon direction="next" />
                      </button>
                      <div className="gallery-dots" aria-label="Project screenshots">
                        {images.map((image, index) => (
                          <button
                            key={image}
                            type="button"
                            className={index === activeImage ? "active" : ""}
                            aria-label={`Show image ${index + 1}`}
                            aria-pressed={index === activeImage}
                            onClick={() => setActiveImage(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <span>Project preview coming soon</span>
              )}
            </div>

            <div className="project-modal-content">
              <p className="project-eyebrow">Selected project</p>
              <h2 id="project-modal-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              {project.stack?.length > 0 && (
                <ul className="project-stack" aria-label={`${project.title} technologies`}>
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              )}

              {(project.liveURL || project.codeURL) && (
                <div className="project-actions">
                  {project.liveURL && (
                    <a className="project-action primary" href={project.liveURL} target="_blank" rel="noreferrer">
                      Visit live site <ExternalLinkIcon />
                    </a>
                  )}
                  {project.codeURL && (
                    <a className="project-action" href={project.codeURL} target="_blank" rel="noreferrer">
                      View code <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
      </section>
    </div>
  );
}

export default ProjectModal;
