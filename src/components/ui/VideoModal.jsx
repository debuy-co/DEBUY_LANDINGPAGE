export default function VideoModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-close" onClick={onClose}>
          ×
        </button>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="How it works"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
