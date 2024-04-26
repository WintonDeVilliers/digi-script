# Digi-script
	The Proposed project aims to digitize call-scripts to improve Consultants' on-call compliance,
	and improve both Consultant and Customer experience during our Customer acquisition stage.
	As well as optimise distribution and version control of our QA call script tools.

 ### Current state:
	The call scripting tools are currently facilitated and administered on two different platforms,
	one part(Sales-Hook) of the script is published and managed digitally on Third-party-Application,
	whilst most of the call script is printed on paper(Compliance,Product and Process etc.),and provided to Consultants to use during call interactions.
 	
  ### Risk associated with current state:
	- Increased printing costs as all agents must be provided with updated copies of call scripts for every version update including replacing misplaced or lost scripts.
	- The business is exposed to potential high risk of reputational damage, financial loss and regulatory penalties due to poor version control of call scripts which facilitates our   
    execution of sales process.

  ### How do we intend to resolve:
	We suggest the implementation of a Digitized version of our QA call scripting tools.
	The proposition is to create a Web-application, that will have with in it all tools like scripts,
	check-lists and product catalogs as well as other infographic material.
 	We will use Next.js for Client-side layout ,styling and basic functionality. 
	Then add Strapi CMS to allow assigned QA team member(s) access for easy editing of information.


      <h1 className={styles.headline}>Feature Description</h1>
      
      <p className={styles.statement}>
In an effort to mitigate against the increasing on-call-omission(s) that could result in possible write-offs, reputational and other types of losses.
<br />
We could use the Digital Script to usher in a "smart-check-list" that can give the user real-time feedback regarding the quality of their calls.
<br />
<br />
Below is an example/prototype of what this could be.

<h3>How it could work </h3>

<ul>
  <li>1. The user clicks start button to "activate" the checklist.</li>
  <li>2. Activation allows the check-list to listen to what the user is saying and capture that as a 'user-transcript"</li>
  <li>3. The application then looks through the user-transcript to ensure all mandatory parts have been covered.</li>
  <li>3.1.1. Mandatory parts are shown as list/bullet points and as they are mentioned/covered by the user the bullet point will be removed.</li>
  <li>4. When the user clicks stop , a final score is given</li>
</ul>
### Voice Recognition enabled checklist
![smartchecklistfeature](https://github.com/WintonDeVilliers/digi-script/assets/65846344/bd6e0935-5c18-4374-a3d3-0f625eb77707)

### Home Page
![homepage](https://github.com/WintonDeVilliers/digi-script/assets/65846344/207f8faf-e3e7-4d84-b198-05151abf0985)

### Script Page
![scriptpage](https://github.com/WintonDeVilliers/digi-script/assets/65846344/e27399b4-d4df-42b0-9a15-b0fc7b30372b)


### Script Page pop-up
![scriptmodal](https://github.com/WintonDeVilliers/digi-script/assets/65846344/aefe208a-bc3a-4667-a592-7fe5cf96b1bd)


### Conventional Checklist
![checklistpage](https://github.com/WintonDeVilliers/digi-script/assets/65846344/df4e05a9-f69e-47f3-ae34-3e1ff9fd70ba)












