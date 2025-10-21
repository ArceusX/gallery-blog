import React, { useMemo } from 'react';
import './css/Fundraising.css';

/**
 * A progress bar component for displaying fundraising status.
 * 
 * @param {string} mission - The fundraising mission statement.
 * @param {number} raised - The amount of money raised.
 * @param {number} goal - The fundraising goal.
 * @param {number} nDonors - The number of donors.
 * @returns {JSX.Element} The rendered progress bar.
 */

const Fundraising = ({ data }) => {
  if (!data?.active) return null;

  const { mission, description, image, raised, goal, nDonors } = data;

  const percent = goal > 0 ? Math.min((raised / goal) * 100, 100).toFixed(1) : 0;

  return (
    <div className="fund-container">
      {/* Top section: mission */}
      <div className="fund-top">
        <h3 className="fund-mission">{mission}</h3>
      </div>

      {/* Bottom section: left image + right details */}
      <div className="fund-bottom">
        {/* Left: image */}
        <div className="fund-bottom-left">
          {image && (
            <img src={image} alt={mission} className="fund-image" loading="lazy" />
          )}
        </div>

        {/* Right: description + stats + bar + donors + button */}
        <div className="fund-bottom-right">
          <p className="fund-text">{description}</p>

          <div className="fund-stats">
            <span className="fund-raised">${raised.toLocaleString()}</span>{" "}
            raised of ${goal.toLocaleString()} goal
          </div>

          <div
            className="fund-bar"
            role="progressbar"
            aria-valuenow={raised}
            aria-valuemin={0}
            aria-valuemax={goal}
          >
            <div className="fund-fill" style={{ width: `${percent}%` }}>
              <span className="fund-percent">{percent}%</span>
            </div>
          </div>

          <div className="fund-donors">
            {nDonors.toLocaleString()} donor{nDonors !== 1 ? "s" : ""}
          </div>

          <button className="fund-donate-btn">Donate Now</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Fundraising);
