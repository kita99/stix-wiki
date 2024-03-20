import styles from './styles.module.css';

const StixTable = () => {
  return (
    <div>
      <div className={styles.section}>
        <h4 className={styles.heading}>Required Common Properties</h4>
        <hr className={styles.divider} />
        <div>
          <p>type, id</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>Optional Common Properties</h4>
        <hr className={styles.divider} />
        <div>
          <p>spec_version, object_marking_refs, granular_markings, defanged, extensions</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>Not Applicable Common Properties</h4>
        <hr className={styles.divider} />
        <div>
          <p>created_by_ref, revoked, labels, confidence, lang, external_references</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>Artifact Object Specific Properties</h4>
        <hr className={styles.divider} />
        <div>
          <p>mime_type, payload_bin, url, hashes, encryption_algorithm, decryption_key</p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>ID Contributing Properties</h4>
        <hr className={styles.divider} />
        <div>
          <p>hashes, payload_bin</p>
          <p>
            If the hashes property is present, include only one hash. The selected hash SHOULD come from this ordered
            list (based on the following order of preference) [ MD5, SHA-1, SHA-256, SHA-512 ].
          </p>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.heading}>Attribute details</h4>
        <hr className={styles.divider} />
        <div className={styles.attribute}>
        <p>
          <span>type</span>
          <code>required, string</code>
        </p>
        </div>
        <p>The value of this property MUST be <code>artifact</code>.</p>
      </div>
    </div>
  );
};

export { StixTable };
