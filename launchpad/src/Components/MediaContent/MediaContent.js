import React from "react";
import { streamingData } from "../../Data/Data";
import Logo from "../Logo/Logo";

const MediaContent = ({ user }) => {
  return (
    <div className="media-content">
      <h3>Streaming Services</h3>
      <div className="media-content-list">
        {streamingData.map((streamingService, i) => (
          <React.Fragment key={`media-${streamingService.id}-${i}`}>
            {streamingService?.users.includes(user?.id) && (
              <div className="media-content-item">
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
                      width="100px"
                    />
                  </button>
                </a>
              </div>
            )}
          </React.Fragment>
        ))}
        <div className="logo">
          <Logo />
        </div>
      </div>
    </div>
  );
};
export default MediaContent;
