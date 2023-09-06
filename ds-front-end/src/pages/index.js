import Footer from "@/components/Footer";
import styles from '../styles/Home.module.css';
import HomePageHeader from "@/components/HomePageHeader";


export default function Home() {
  
  return (
    <>
     
    <div className={styles.container}>
      <HomePageHeader />
    <div className={styles.main}>

    <div className={styles.main_content}>
       <h1 className={styles.headline}>Digital Call Script Project</h1>
          <div>
            <p className={styles.description}>
            The Proposed project aims to digitize call-scripts to improve Consultants' on-call compliance,
            <br />
            and improve both Consultant and Customer experience during our Customer acquisition stage.
            <br />
            As well as optimise distribution and version control of our QA call script tools.
            <br/>
            </p>

            <p className={styles.description}>
            The proposition is to create a Web-application , that will have with in it all tools like scripts,
            <br />
            check-lists and product catalogs as well as other infographic material.
            

            </p>

            <p className={styles.description}>
            We will use Next.js(HTML,CSS,JS) to create the initial web-site layout , styling and basic functionality. 
            <br />
            Then we will add Strapi CMS to allow assigned QA team member(s) access for easy editing of information.
            
            </p>
          </div>

      </div>
        </div>
      <Footer />
      </div>

    </>
  )
}
