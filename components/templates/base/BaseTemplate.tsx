import styles from './BaseTemplate.module.css'
import React from 'react';

export interface IBaseTemplate {
  sampleTextProp: string
}

const BaseTemplate: React.FC<IBaseTemplate> = ({sampleTextProp}) => {
  return <div className={styles.container}>{sampleTextProp}</div>
}

export default BaseTemplate