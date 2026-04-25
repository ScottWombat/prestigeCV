import './index.css'

export const PersonalDetails = () =>{
    return(
      <div className="personal-details">
      <div className="personal-details-header">Persional Details:</div>
      <div className="row">
            <div className="field">
          <label htmlFor="fname">First name<span className="req-star">*</span></label>
          <div className="input-wrap">
            <input id="fname" type="text" placeholder="Ada" required minLength={2} autoComplete="given-name"/>
            <span className="status-icon">
              <svg className="icon-valid" width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#059669" opacity=".15"/><path d="M4 7l2 2 4-4" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <svg className="icon-invalid" width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#dc2626" opacity=".12"/><path d="M5 5l4 4M9 5l-4 4" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round"/></svg>
            </span>
          </div>
          <span className="field-error">Minimum 2 characters</span>
        </div>
        <div className="field">
          <label htmlFor="lname">Last name<span className="req-star">*</span></label>
          <div className="input-wrap">
            <input id="lname" type="text" placeholder="Lovelace" required minLength={2} autoComplete="family-name"/>
            <span className="status-icon">
              <svg className="icon-valid" width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#059669" opacity=".15"/><path d="M4 7l2 2 4-4" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <svg className="icon-invalid" width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#dc2626" opacity=".12"/><path d="M5 5l4 4M9 5l-4 4" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round"/></svg>
            </span>
          </div>
          <span className="field-error">Minimum 2 characters</span>
        </div>
      </div>
      
      <div className="field">
        <label htmlFor="password">Password<span className="req-star">*</span></label>
      </div>  
      <div className="input-wrap">
          <input id="password" type="password" placeholder="Create a strong password"
            required minLength={8} maxLength={12} pattern="(?=.*[A-Z])(?=.*\d).{8,}" autoComplete="new-password"/>
           <span className="status-icon">
            <svg className="icon-valid" width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#059669" opacity=".15"/><path d="M4 7l2 2 4-4" stroke="#059669" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <svg className="icon-invalid" width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" fill="#dc2626" opacity=".12"/><path d="M5 5l4 4M9 5l-4 4" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
      </div>
       <div className="pw-strength">
          <div className="pw-seg" id="s1"></div>
          <div className="pw-seg" id="s2"></div>
          <div className="pw-seg" id="s3"></div>
          <div className="pw-seg" id="s4"></div>
        </div>
      </div>
    )
}