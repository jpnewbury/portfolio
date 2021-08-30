export default function portrait() {
  return (
    <div className="container">
      <div className="img-container">
        <img className="portrait" src="/1.jpg" alt="me" />
      </div>
      <svg viewBox="0 0 1.49 1">
        <defs>
          <clipPath clipPathUnits="objectBoundingBox" id="portrait-mask">
            <path d="M.34,0H.66A.34.34,0,0,1,1,.34v0A.64.64,0,0,1,.36,1h0A.34.34,0,0,1,0,.66V.34A.34.34,0,0,1,.34,0Z" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
