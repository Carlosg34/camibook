import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import isEmpty from "../../validation/is-empty";

class ProfileItem extends Component {
  render() {
    const { profile } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-3">
            <img src={profile.user.avatar} alt="" className="rounded-circle" />
          </div>
          <div className="col-lg-6 col-md-8 col-8">
            <h3>{profile.user.name}</h3>
            <p>
              {isEmpty(profile.occupation) ? null : (
                <span>{profile.occupation}</span>
              )}
            </p>
            <Link
              to={`/profile/${profile.handle}`}
              className="btn btn-sm btn-warning"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
