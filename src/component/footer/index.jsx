import { React } from "react";

export function Footer() {
  return (
    <>
      <div className="instruction">
        <p className="title">Message and Data rates may apply.</p>
        <p>
          By proceeding, I accept the PayFor Shopping Service and confirm that I{" "}
          <br />
          have read PayFor Privacy Notice. Links in the app are sponsored.
        </p>
        {/* <p>
                    This page is protected by reCAPTCHA. By continuing I confirm having  <br/>
                    read Google’s Privacy Policy and accepted Google’s Terms.
                </p> */}
      </div>

      <div className="footer">© Copyright Payfor 2022</div>
    </>
  );
}
