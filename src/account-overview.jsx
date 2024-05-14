import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';
import SupportContact from "./support-contact";
import SupportData from "./support-data";

const AccountOverview = () => {
  return (
    <div className="account-overview">
      <h2 style={{marginTop: '50px' }}>Account Overview</h2> {/* Ajustando margem esquerda e inferior */}
      <div className="overview-content">
        <SupportData />
      </div>
    </div>
  );
}

export default AccountOverview;