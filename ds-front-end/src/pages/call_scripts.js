import styles from '../styles/Scripts.module.css';
import Footer from "@/components/Footer"
import CallScriptHeader from '@/components/CallScriptHeader';
// import Script from 'next/script'
// import Link from 'next/link'
import ReactMarkdown from 'react-markdown';

export const getServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL_SALES_FIRST_CALL)
  
  const sc_one_contents = await res.json()
  console.log(sc_one_contents)
  return { props: { sc_one_contents } }
}

export default function Call_scripts({ sc_one_contents }) {
    if (!sc_one_contents) return <div>Loading...</div>;
    
  return (
    <>
      {/* NAVIGATION BAR */}
      <CallScriptHeader />
      {/* NAVIGATION BAR  END*/}
      {sc_one_contents.data.map((sc_one_content) => (
      <div key={sc_one_content.attributes.id=1}>
      {/* CALL INTRO SECTION START */} 
        <div id="OPEN"className={styles.open_section}>
          <h1 className={styles.headline}>
          <mark className={styles.mark}>INTRODUCTION</mark>
          </h1>
        </div>
          {/* *CARD CONTENT AREA * */}
        <div className={styles.card_content_area}>
          <div>
            <div className={styles.cards}>
                  {/* *INTRO CARD START * */}
                  <div className={styles.card}>
                  
                    <ReactMarkdown>
                    {sc_one_content.attributes.Introduction}
                    </ReactMarkdown>
                    {/* HOOK BUTTONS START */}
                    <div className={styles.grid}>
                      <button className={styles.wrapper}>
                          CLICKWAY
                        <div className={styles.tooltip}>
                          <h5>AB_CLICKWAY_CAMPAIGN</h5>
                          <ReactMarkdown>
                          {sc_one_content.attributes.hook}
                          </ReactMarkdown>
                          {/* I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                          Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                          imperdiet libero,in condimentum odio mauris sed metus.<br />
                          Nunc pharetra tincidunt<br />
                          ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                          leo vitae dictum euismod. */}
                        </div>
                      </button>
                    </div>
                    {/* HOOK BUTTONS END */}
                    <ReactMarkdown>
                    {sc_one_content.attributes.InstructionsProductSignal}
                    </ReactMarkdown>
                    {/*FREQUENT OBJECTION BUTTON*/}
                    <button className={styles.wrapper}>COMMON OBJECTIONS
                        <div className={styles.tooltip}>
                        <p>xObjection: I already have a loan...</p>
                        <p>Response: Lorem ipsum dolor sit amet,consectetur adipiscing elit.</p>
                        <br />
                        <p>Objection: I won't be able to afford another installment</p>
                      </div>
                    </button>
                    {/*FREQUENT OBJECTION BUTTON END*/}
                    <br />
                    <br />



                  </div>
                  {/* *INTRO CARD END * */}
                 
                  {/* *PRE-QUALIFYING QUESTIONS CARD START * */}
                  <div className={styles.card}>
                  
                  <h2>Pre-Qualifying Questions &#129000;</h2> 
                    <ReactMarkdown>
                    {sc_one_content.attributes.PreQualifyingQuestions}
                    </ReactMarkdown>

                   <h2>Compliance Questions &#128997;</h2>
                    <ReactMarkdown>
                     
                    {sc_one_content.attributes.ComplianceQuestions}
                    </ReactMarkdown>
                    
                    {/* *COMPLIANCE BUTTON GROUP * */}
                    <div>
                    <button className={styles.wrapper}>
                      PRE-QUALIFICATION NOT MET
                      <div className={styles.tooltip}>
                        <span>
                          <h5>PRE-QUALIFICATION NOT MET</h5>
                            I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                            Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                            imperdiet libero,in condimentum odio mauris sed metus.<br />
                            Nunc pharetra tincidunt<br />
                            ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                            leo vitae dictum euismod.
                        </span>
                      </div>
                    </button>
                    </div>
                    <br />
                    <div>
                    <button className={styles.wrapper}>
                      COMPLIANCE FAQ's
                        <div className={styles.tooltip}>
                          <span>
                            <h5>COMPLIANCE FAQ's</h5>
                            I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                            Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                            imperdiet libero,in condimentum odio mauris sed metus.<br />
                            Nunc pharetra tincidunt<br />
                            ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                            leo vitae dictum euismod.
                          </span>
                        </div>
                    </button>
                    </div>
                    <br />
                    <div>
                    <button className={styles.wrapper}>
                      CUSTOMER DECLINE CREDIT CHECK(S)
                        <div className={styles.tooltip}>
                          <span>
                            <h5>CUSTOMER DECLINE CREDIT CHECK</h5>
                              I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                              Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                              imperdiet libero,in condimentum odio mauris sed metus.<br />
                              Nunc pharetra tincidunt<br />
                              ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                              leo vitae dictum euismod.
                          </span>
                        </div>
                    </button>
                    </div>
                    <br />
                    {/* *COMPLIANCE BUTTON GROUP END * */}
                  </div>
                  {/* *PRE-QUALIFYING QUESTIONS CARD END * */}
                  {/* *EARLY DIGITAL MIGRATION CARD START * */}
                  <div className={styles.card}>
                    <h2>Early Digital Migration &#129001;</h2>
                    <ReactMarkdown>
                    {sc_one_content.attributes.EarlyDigitalMigration}
                    </ReactMarkdown>
                  </div>
                  {/* *EARLY DIGITAL MIGRATION CARD END * */}
              </div>
            </div>
        </div>
        {/* *CARD CONTENT AREA END* */}
        {/* CALL INTRO SECTION END */}

        {/* APPLICATION START SECTION */}
        <div id="APPSTART" className={styles.open_section}>
          <h1 className={styles.headline}>
          <mark className={styles.mark}>APPLICATION START</mark>
          </h1>
        </div>
        {/* *CARD CONTENT AREA * */}
        <div className={styles.card_content_area}>
          <div className={styles.cards}>
          {/* CUSTOMER AUTH CARD */}
            <div className={styles.card}>
              <ReactMarkdown>
              {sc_one_content.attributes.CustomerAuthentication}
              </ReactMarkdown>
              <div>
                <button className={styles.wrapper}>
                  REFUSING INFO PROCESSING
                  <div className={styles.tooltip}>
                    <span>
                      <h6>REFUSING INFO PROCESSING</h6>
                      I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                      Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                      imperdiet libero,in condimentum odio mauris sed metus.<br />
                      Nunc pharetra tincidunt<br />
                      ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                      leo vitae dictum euismod.
                    </span>
                  </div>
                </button>
              </div>
              <p />
              <h2>ID & V &#128997;</h2>
              <ReactMarkdown>
            
              {sc_one_content.attributes.IdentificationAndVerification}
              </ReactMarkdown>
              <div>
              <button className={styles.wrapper}>
                  REFUSING INFO PROCESSING
                <div className={styles.tooltip}>
                  <span>
                    <h6>REFUSING INFO PROCESSING</h6>
                    I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                    Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                    imperdiet libero,in condimentum odio mauris sed metus.<br />
                    Nunc pharetra tincidunt<br />
                    ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                    leo vitae dictum euismod.
                  </span>
                </div>
              </button>
              </div>
              <br />
              <div>
              <button className={styles.wrapper}>
                  POP-UP NOTIFICATION NOT RECIEVED
                <div className={styles.tooltip}>
                  <span>
                    <h6>POP-UP NOTIFICATION NOT RECIEVED</h6>
                    I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                    Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                    imperdiet libero,in condimentum odio mauris sed metus.<br />
                    Nunc pharetra tincidunt<br />
                    ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                    leo vitae dictum euismod.
                  </span>
                </div>
              </button>
              </div>
              <h2>Regulatory Statements  &#128997;</h2>
              <ReactMarkdown>
              {sc_one_content.attributes.RegulatoryStatements}
              </ReactMarkdown>
            
            </div>
            {/* CUSTOMER AUTH CARD */}
            <div className={styles.card}>
              <ReactMarkdown>
              {sc_one_content.attributes.BankingDetails}
              </ReactMarkdown>

              <div>
                <button className={styles.wrapper}>
                  BANKING DETAILS FAQ's
                  <div className={styles.tooltip}>
                    <span>
                      <h5>CUSTOMER DECLINE CREDIT CHECK</h5>
                      I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                      Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                      imperdiet libero,in condimentum odio mauris sed metus.<br />
                      Nunc pharetra tincidunt<br />
                      ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                      leo vitae dictum euismod.
                    </span>
                  </div>
                </button>
              </div>

              <ReactMarkdown>
              {sc_one_content.attributes.BankStatements}
              </ReactMarkdown>

              <div>
                <button className={styles.wrapper}>
                  CLIENT WANTS TO SEND BANK STATEMENTS
                  <div className={styles.tooltip}>
                    <span>
                      <h5>CLIENT WANTS TO SEND BANK STATEMENTS</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                    </span>
                  </div>
                </button>
              </div>

              <ReactMarkdown>
              {sc_one_content.attributes.EmployerDetails}
              </ReactMarkdown>

              <div>
                <button className={styles.wrapper}>
                  PERSAL NUMBERS
                  <div className={styles.tooltip}>
                    <span>
                      <h5>PERSAL NUMBERS</h5>
                      I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                      Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                      imperdiet libero,in condimentum odio mauris sed metus.<br />
                      Nunc pharetra tincidunt<br />
                      ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                      leo vitae dictum euismod.
                    </span>
                  </div>
                </button>
              </div>
              <br />
              <div>
                <button className={styles.wrapper}>
                  CONTRACT WORKERS
                  <div className={styles.tooltip}>
                    <span>
                      <h5>CONTRACT WORKERS</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                    </span>
                  </div>
                </button>
              </div>
              <br />


            </div>
            {/* CUSTOMER AUTH CARD END*/}
            {/* INCOME NAD EXPENSES*/}
            <div className={styles.card}>
            <ReactMarkdown>
            {sc_one_content.attributes.IncomeAndExpenses}
            </ReactMarkdown>
            </div>
            {/* INCOME NAD EXPENSES END*/}
            

          </div>
        </div>
        {/* APPLICATION START SECTION END */}

        <div id="APPOUTCOME" className={styles.open_section}>
          <h1 className={styles.headline}>
            <mark className={styles.mark}>APPLICATION OUTCOME</mark>
          </h1>
        </div>
        {/* *CARD CONTENT AREA * */}
        <div className={styles.card_content_area}>
          <div className={styles.cards}>
            {/* PENDING APP OUTCOME CARD */}
            <div className={styles.card}>
              <ReactMarkdown>
              {sc_one_content.attributes.PendingApplicationOutcome}
              </ReactMarkdown>
              <ReactMarkdown>
              {sc_one_content.attributes.CreditLifeCover}
              </ReactMarkdown>
              <div>
                <button className={styles.wrapper}>
                    CREDIT LIFE FAQ's
                    <div className={styles.tooltip}>
                      <span>
                        <h5>CREDIT LIFE FAQ's</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                      </span>
                    </div>
                </button>
              </div>
              <p />
              <div>
                <button className={styles.wrapper}>
                    CREDIT LIFE COST 
                    <div className={styles.tooltip}>
                      <span>
                        <h5>CREDIT LIFE COST</h5>
                        I am a ldLorem ipsum dolor sit amet,consectetur adipiscing elit.<br />
                        Nunc convallis,nisl vel venenatis molestie,lectus ligula<br />
                        imperdiet libero,in condimentum odio mauris sed metus.<br />
                        Nunc pharetra tincidunt<br />
                        ligula nec finibus. Pellentesque ut congue elit. Praesent aliquam<br />
                        leo vitae dictum euismod.
                      </span>
                    </div>
                </button>
              </div>
              <br />
            </div>
            {/* PENDING APP OUTCOME CARD */}
            <div className={styles.card}>
              <ReactMarkdown>
              {sc_one_content.attributes.ApplicationSuccessfulOutcome}
              </ReactMarkdown>
            </div>
            {/* PENDING APP OUTCOME CARD */}
            {/* BUREAU INFO & DOCUMENTS CARD */}
            <div className={styles.card}>
              <ReactMarkdown>
              {sc_one_content.attributes.BureauInformation}
              </ReactMarkdown>
              <ReactMarkdown>
              {sc_one_content.attributes.Documentation}
              </ReactMarkdown>
              <h3>Email Instructions &#128236;</h3>
              <ul>
              <li>Customer ID Number in the subject line</li>
              <li>Email address: 123@abc.co.za</li>
              </ul>
              <h3>WhatsApp Instructions  &#128172;</h3>
              <ul>
                <li>Send a message saying 'hi' and follow the instructions sent to you.</li>
                <li>whatsapp: 0865 409 409</li>
              </ul>
 
            </div>
            {/* BUREAU INFO & DOCUMENTS CARD */}
          </div>

          <div id="CLOSEOUT" className={styles.open_section}>
            <h1 className={styles.headline}>
              <mark className={styles.mark}>CLOSE-OUT PROTOCOL</mark>
            </h1>
          </div>
          <div className={styles.card_content_area}>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h2><u>Next Steps</u></h2>
                <h2>Digital Migration</h2>
                <h4><u>If a Customer has the app</u></h4>
                Occaecat consectetur est cillum Lorem voluptate culpa duis consequat cupidatat labore.
                Ad pariatur excepteur Lorem aute nulla amet.
                Adipisicing sit proident aliqua tempor sunt sint commodo.

                <h4><u>When a Customer does not have the app</u></h4>
                Occaecat consectetur est cillum Lorem voluptate culpa duis consequat cupidatat labore.
                Ad pariatur excepteur Lorem aute nulla amet.
                Adipisicing sit proident aliqua tempor sunt sint commodo.
                <br />
                Occaecat consectetur est cillum Lorem voluptate culpa duis consequat cupidatat labore.
                Ad pariatur excepteur Lorem aute nulla amet.
                Adipisicing sit proident aliqua tempor sunt sint commodo.
              
                

                <h3>Debi-Check</h3>
                You will receive a Debi-Check notification before finalization of your application is complete.
                It is important to accept this auhtority, in order for us to deposit the funds into your account.
                <br />
                <h4><u>If Notification is not accepted ?</u></h4>
                Laborum labore in anim cupidatat tempor ex ipsum Lorem do sunt mollit. Amet incididunt nulla reprehenderit consequat minim culpa fugiat nostrud incididunt commodo duis velit. 
                <br />
                <h3>Expected waiting time</h3>
                Aute ex sint ut irure officia ad laboris. Elit sunt pariatur elit exercitation. Eu aliqua ad eu id eiusmod id irure qui et ad consequat amet consectetur.
               Et ea nisi ea laboris anim anim do magna esse. Ea veniam mollit id deserunt eiusmod.
               <h4></h4>
                Exercitation tempor Lorem incididunt aliqua dolore tempor amet aute veniam. Consequat nostrud excepteur tempor ullamco labore aute ut aliquip.
                 Veniam aliquip dolore do nisi consectetur et irure mollit elit nulla aliqua.
                 <h2>Create Expectation for Document(s)</h2>
                 <p />
              </div>
              <div className={styles.card}>
                <h2>Card Delivery</h2>
                Cupidatat ullamco exercitation fugiat qui ex proident non non quis. Deserunt eiusmod non enim laborum excepteur. 
                Reprehenderit veniam ut aliquip fugiat excepteur qui duis.
                 Elit voluptate aliqua tempor elit cupidatat dolor.
                 Amet nostrud deserunt culpa minim officia ex labore enim officia occaecat nulla quis qui magna.
                 Tempor esse amet est voluptate enim anim duis. Mollit amet dolore occaecat id adipisicing magna ad.
                <h4><u>Deliver Steps</u></h4>
                 <ol>
                    <li>Excepteur minim laborum excepteur laboris esse tempor.</li>
                    <li>Esse voluptate deserunt deserunt officia ullamco cupidatat officia dolore occaecat.</li>
                    <li>Sit nostrud excepteur duis cupidatat culpa quis anim anim.</li>
                 </ol>
                <h2><u>Fraud Alert</u></h2>
                Mollit laboris adipisicing voluptate eu et consequat dolore qui reprehenderit amet reprehenderit sint.
                 Magna est culpa incididunt consectetur. Fugiat deserunt tempor sint mollit laboris veniam minim in.
                 Elit aliqua labore excepteur pariatur occaecat ullamco officia non nulla est Lorem ex.

                <h2><u>Survey</u></h2>
                <p>Lorem consectetur laborum Lorem elit. Ipsum irure culpa incididunt incididunt culpa.
                 Et sint dolore Lorem reprehenderit sunt consequat ad enim quis.</p>
                <p>Eu culpa excepteur aute aute sunt tempor magna Lorem. 
                 Fugiat nostrud magna quis non labore sint consequat id nulla.
                Pariatur ullamco quis cupidatat deserunt aute occaecat irure nostrud eu.</p>
          —CREATE EXPECTATION(DOCS)
          --CONTRACT FINALIZATION
              </div>
            </div>
          </div>
          

        </div>
        
        {/* *CARD CONTENT AREA * */}






      </div>
      ))}


      
      

      
      {/* <Footer />     */}
   </>
 )
}

  