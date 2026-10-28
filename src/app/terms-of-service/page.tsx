import { Metadata } from "next";
import LegalLayout from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "User Terms of Service | FlowSurge AI",
  description: "The terms every user of the FlowSurge application accepts, including acceptable use, patient information and AI agents.",
  alternates: { canonical: "/terms-of-service/" },
};

export default function TermsOfService() {
  return (
    <LegalLayout
      title="User Terms of Service"
      effectiveDate="October 28, 2026"
      lastUpdated="October 28, 2026"
    >
      <section>
        <h2>1. First things first</h2>
        <h3>These User Terms are legally binding</h3>
        <p>
          These User Terms of Service (&ldquo;User Terms&rdquo;) govern your
          access to and use of FlowSurge, the software service operated by
          FlowSurge LLC (&ldquo;FlowSurge&rdquo;, &ldquo;we&rdquo; or
          &ldquo;us&rdquo;), including its web application, AI agents and
          related services (the &ldquo;Services&rdquo;). By clicking to accept
          these User Terms, or by using the Services, you agree to them. If you
          do not agree, do not use the Services.
        </p>
      </section>

      <section>
        <h2>2. You use FlowSurge on behalf of a Customer</h2>
        <h3>Who the Customer is</h3>
        <p>
          You have access to the Services because an organization that has an
          account with us (the &ldquo;Customer&rdquo;) invited you, or because
          you created that account on the Customer&apos;s behalf. A Customer
          may be, for example, a dental or orthodontic practice, a group of
          practices, or a dental service organization.
        </p>
        <h3>The Customer Agreement takes precedence</h3>
        <p>
          The Customer has one or more agreements with us, which may include a
          HIPAA business associate agreement. Together, these are the
          &ldquo;Customer Agreement&rdquo;. The Customer Agreement governs the
          Customer&apos;s use of the Services and the information in its
          account. Where the Customer Agreement and these User Terms differ,
          the Customer Agreement takes precedence.
        </p>
        <h3>The Customer makes the choices</h3>
        <p>
          The Customer decides who may use its account and with what
          permissions. The Customer&apos;s administrators can, among other
          things, add and remove users, change roles, reset passwords, change
          account settings and review activity in the account. The Customer
          controls the information in its account, including information you
          add, and may access, keep or delete it. If you have questions about
          the Customer&apos;s settings or how it uses your information, ask the
          Customer.
        </p>
        <h3>What this means for you and for us</h3>
        <p>
          The Customer is responsible for its users&apos; use of the Services.
          These User Terms do not give you personal rights to the
          Customer&apos;s account or the information in it.
        </p>
      </section>

      <section>
        <h2>3. Ground rules</h2>
        <h3>Who may use the Services</h3>
        <p>
          You must be at least 18 years old and must be authorized by the
          Customer to use its account.
        </p>

        <h3>Your account</h3>
        <ul>
          <li>
            Your account is for you alone. Do not share your sign-in details or
            let anyone else use your account, and do not use anyone
            else&apos;s.
          </li>
          <li>
            Keep your password confidential and complete any additional
            sign-in steps the Customer or we require.
          </li>
          <li>You are responsible for activity under your account.</li>
          <li>
            If you think someone else has used your account, tell the Customer
            and us right away.
          </li>
          <li>Sign out when you finish on a shared or public computer.</li>
        </ul>

        <h3>Patient information</h3>
        <p>
          The Services contain patients&apos; protected health information. You
          must:
        </p>
        <ul>
          <li>
            Comply with HIPAA. HIPAA (the Health Insurance Portability and
            Accountability Act of 1996) and its regulations are the federal law
            that protects the privacy and security of patients&apos; health
            information. You are required to follow HIPAA, and any state laws
            that also protect health information, whenever you use the
            Services. Breaking these laws can lead to civil and criminal
            penalties.
          </li>
          <li>
            Access, use and disclose patient information only as your work for
            the Customer requires and as the Customer&apos;s privacy policies
            and applicable law, including HIPAA, permit.
          </li>
          <li>
            Not look up records you have no work reason to see, including your
            own, your family&apos;s, friends&apos;, coworkers&apos; or public
            figures&apos;.
          </li>
          <li>
            Not copy, export, download, photograph or share patient information
            outside the Services except as your work for the Customer requires
            and the Customer&apos;s policies permit.
          </li>
          <li>
            Report any suspected unauthorized access, use or disclosure of
            patient information to the Customer and us right away.
          </li>
        </ul>

        <h3>Contacting patients and other people</h3>
        <p>
          The Services let you call, text and email patients, referring
          providers and other contacts, both directly and through automated
          sequences. When you do, you must:
        </p>
        <ul>
          <li>Contact people only for the Customer&apos;s legitimate business purposes.</li>
          <li>
            Send calls, texts and emails only where the recipient has given any
            consent the law requires, and follow applicable law and carrier
            rules, including the Telephone Consumer Protection Act and
            CAN-SPAM.
          </li>
          <li>Honor opt-out and unsubscribe requests and never try to get around them.</li>
          <li>
            Not send false, misleading, harassing or unlawful content, or
            misrepresent who the message is from.
          </li>
          <li>Include no more patient information in a message than its purpose needs.</li>
          <li>
            Follow our <a href="/terms/">Messaging Terms &amp; Conditions</a>{" "}
            and <a href="/sms-terms/">SMS Terms &amp; Disclosures</a>.
          </li>
        </ul>

        <h3>AI agents</h3>
        <p>
          The Services include AI agents that act for the Customer on their
          own, without a person approving each action. Depending on how the
          Customer sets them up, agents may place calls, send texts and respond
          to the people they contact. When you set up, turn on or direct an
          agent, you agree that:
        </p>
        <ul>
          <li>
            The rules in this section 3 apply to everything an agent does for
            you as if you had done it yourself. Do not set up or instruct an
            agent to do anything these User Terms do not allow you to do.
          </li>
          <li>
            Agents contact only people who have given any consent the law
            requires for automated or artificial-voice calls and texts, and
            identify themselves as automated where the law requires it.
          </li>
          <li>
            AI output can be wrong or incomplete. Check agent activity
            regularly, and correct or stop an agent that is not behaving as
            intended.
          </li>
          <li>
            Agents do not give medical advice. Do not use them to diagnose,
            recommend treatment or make clinical decisions, and do not rely on
            their output for those purposes.
          </li>
        </ul>

        <h3>Acceptable use</h3>
        <p>You may not, and may not help anyone else to:</p>
        <ul>
          <li>Use the Services in violation of any law or anyone&apos;s rights.</li>
          <li>
            Access, or try to access, any account or information you are not
            authorized to access, including another Customer&apos;s.
          </li>
          <li>
            Probe, scan or test the Services for vulnerabilities, or get around
            any security, access or usage limit, without our written
            permission.
          </li>
          <li>
            Interfere with or overload the Services, or access them by
            automated means such as scripts or scrapers except through
            interfaces we provide for that purpose.
          </li>
          <li>Upload viruses or other harmful code.</li>
          <li>
            Copy, modify, reverse engineer or create derivative works of the
            Services, or use them to build a competing product.
          </li>
          <li>Sell, rent or give access to the Services to anyone the Customer has not authorized.</li>
          <li>Impersonate any person or misrepresent your affiliation with anyone.</li>
        </ul>

        <h3>If you are an administrator</h3>
        <p>
          If the Customer has given you administrator permissions, you also
          agree to:
        </p>
        <ul>
          <li>
            Give access only to people the Customer authorizes and who need it,
            with the least permissions their work requires.
          </li>
          <li>Remove access promptly when someone leaves or no longer needs it.</li>
          <li>
            Keep the account&apos;s settings accurate, including sending phone
            numbers, email senders and security settings.
          </li>
          <li>
            Make sure the messages, automated sequences and AI agents you set
            up meet section 3 of these User Terms.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. You are here at the pleasure of the Customer and of us</h2>
        <p>
          The Customer may remove your access at any time. We may suspend or
          end your access if you break these User Terms, if we reasonably
          believe it is needed to protect patients, the Customer, other users
          or the Services, or if the Customer Agreement ends. Where reasonable,
          we will tell the Customer.
        </p>
        <h3>Activity records</h3>
        <p>
          We record access to and activity in the Services for security,
          compliance and audit purposes, and may share these records with the
          Customer.
        </p>
        <h3>Our property and your feedback</h3>
        <p>
          FlowSurge and its licensors own the Services. These User Terms give
          you no rights in the Services other than to use them for the Customer
          as described here. If you send us suggestions or feedback, we may use
          them without any obligation to you.
        </p>
      </section>

      <section>
        <h2>5. Limitation of liability</h2>
        <p>
          WE PROVIDE THE SERVICES TO THE CUSTOMER UNDER THE CUSTOMER AGREEMENT.
          AS BETWEEN YOU AND US, THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo;
          AND &ldquo;AS AVAILABLE&rdquo;, AND WE MAKE NO WARRANTIES TO YOU,
          EXPRESS OR IMPLIED, TO THE FULLEST EXTENT THE LAW ALLOWS. WE WILL NOT
          BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL
          OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE OR DATA, ARISING
          FROM THESE USER TERMS OR THE SERVICES. OUR TOTAL LIABILITY TO YOU
          ARISING FROM THESE USER TERMS OR THE SERVICES WILL NOT EXCEED ONE
          HUNDRED U.S. DOLLARS ($100).
        </p>
        <h3>Survival</h3>
        <p>
          Sections 3 (patient information), 4 (our property and your
          feedback), 5 and 6 continue to apply after your access ends.
        </p>
      </section>

      <section>
        <h2>6. General provisions</h2>
        <h3>Privacy</h3>
        <p>
          Our <a href="/privacy/">Privacy Policy</a> describes how we handle
          personal information. Patient information in the Customer&apos;s
          account is handled under the Customer Agreement.
        </p>
        <h3>Changes to these User Terms</h3>
        <p>
          We may update these User Terms from time to time. We will post the
          updated User Terms with a new effective date, and you are responsible
          for reviewing them. If we consider a change material, we will make
          reasonable efforts to notify you, for example by email or in the
          Services, and we may ask you to accept the updated User Terms before
          you continue using the Services. Changes take effect when posted
          unless we say otherwise, and your continued use of the Services after
          that means you accept them.
        </p>
        <h3>Notices</h3>
        <p>
          We may send you notices by email to the address on your account or
          within the Services.
        </p>
        <h3>Waiver and severability</h3>
        <p>
          If we do not enforce part of these User Terms, that is not a waiver
          of our right to enforce it later. If any part is found unenforceable,
          the rest stays in effect.
        </p>
        <h3>Assignment</h3>
        <p>
          You may not assign these User Terms. We may assign them, including in
          connection with a merger, acquisition or sale of assets.
        </p>
        <h3>Governing law and venue</h3>
        <p>
          These User Terms are governed by the laws of the State of Washington,
          without regard to conflict-of-law rules. Any dispute arising from
          these User Terms or the Services will be brought exclusively in the
          state courts located in King County, Washington, or the United States
          District Court for the Western District of Washington, and you and we
          consent to the personal jurisdiction of those courts. Either party
          may still seek an injunction or other urgent court order in any court
          with jurisdiction to protect patient information, confidential
          information or intellectual property.
        </p>
        <h3>Entire agreement</h3>
        <p>
          These User Terms, together with the Privacy Policy, are the entire
          agreement between you and us about your use of the Services. They do
          not change the Customer Agreement.
        </p>
        <h3>Contacting us</h3>
        <p>
          <strong>FlowSurge LLC</strong>
          <br />
          Email:{" "}
          <a href="mailto:support@flowsurge.ai">support@flowsurge.ai</a>
        </p>
      </section>

      <hr className="legal-divider" />
      <p className="see-also">
        See also: <a href="/privacy/">Privacy Policy</a> &middot;{" "}
        <a href="/terms/">Terms &amp; Conditions</a> &middot;{" "}
        <a href="/sms-terms/">SMS Terms &amp; Disclosures</a>
      </p>
    </LegalLayout>
  );
}
