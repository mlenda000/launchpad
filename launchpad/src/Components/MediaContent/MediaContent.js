import { streamingData } from "../../Data/Data";
import Logo from "../Logo/Logo";

const MediaContent = () => {
  return (
    <div className="media-content">
      <h1>Streaming Services</h1>
      <div className="media-content-list">
        {streamingData.map((streamingService) => (
          <>
            {streamingService?.subscribed && (
              <div key={streamingService.id} className="media-content-item">
                <a
                  href={streamingService?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="media-content-img"
                >
                  <button className="media-content-img">
                    <img
                      src={
                        streamingService.imgLink.includes("/logos")
                          ? process.env.PUBLIC_URL + streamingService.imgLink
                          : streamingService.imgLink
                      }
                      alt={streamingService.display}
                      width="200px"
                    />
                  </button>
                </a>
              </div>
            )}
          </>
        ))}
        <div className="logo">
          <Logo />
        </div>
      </div>
    </div>
  );
};
export default MediaContent;
