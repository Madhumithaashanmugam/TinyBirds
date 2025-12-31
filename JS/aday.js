const popup = document.getElementById("adayPopup");
const popupTitle = document.getElementById("popupTitle");
const popupBody = document.getElementById("popupBody");

const data = {
  caring: {
    title: "Caring Hearts",
    body: `
      <p>
        At our play school, we believe that a nurturing environment is the foundation
        for a child’s growth. <b>Caring Hearts</b> represents our commitment to
        creating a space where every child feels loved, safe, and valued.
      </p>

      <ul>
        <li><b>Emotional Well-being First:</b> We prioritize kindness, empathy, and emotional security in every interaction.</li>
        <li><b>Supportive Teachers:</b> Our educators act as guides and caregivers, ensuring children feel understood and respected.</li>
        <li><b>Inclusive Environment:</b> Every child is welcomed and celebrated for their uniqueness.</li>
        <li><b>Building Trust:</b> Through consistent care and positive reinforcement, we help children develop confidence and self-esteem.</li>
        <li><b>Strong Parent Partnerships:</b> We work closely with families to create a seamless support system for each child.</li>
      </ul>
    `
  },

  curious: {
    title: "Curious Minds",
    body: `
      <p>
        At <b>Curious Minds</b>, we believe every child learns differently.
        Our small class sizes and dedicated educators ensure individual attention.
        We create personalized learning experiences that respect each child’s pace,
        encouraging confidence and curiosity every step of the way.
      </p>

      <h4>1. Focus on Curiosity & Exploration</h4>
      <ul>
        <li>Exploration-based activities</li>
        <li>Real-life connections</li>
        <li>Sensory play, nature walks, and creative art</li>
      </ul>

      <h4>2. Child-Centered Approach</h4>
      <ul>
        <li>Small teacher-child ratio</li>
        <li>Personalized learning plans</li>
        <li>Observation-based approach</li>
        <li>Flexible learning pace</li>
        <li>Encouraging confidence</li>
        <li>Parent collaboration</li>
        <li>Safe and nurturing environment where children feel free to ask questions</li>
      </ul>

      <h4>3. Play-Based Learning</h4>
      <ul>
        <li>Outdoor exploration and nature-based play</li>
        <li>Building blocks for problem-solving</li>
        <li>Role-play to develop social skills</li>
      </ul>

      <h4>4. Developmental Milestones</h4>
      <ul>
        <li>Language development</li>
        <li>Social interaction</li>
        <li>Emotional growth</li>
      </ul>

      <h4>5. Creative Activities</h4>
      <ul>
        <li>Art, music, dance, and storytelling sessions to boost imagination</li>
        <li>Math, general knowledge, phonics, and sound activities</li>
      </ul>

      <h4>6. Safe & Stimulating Environment</h4>
      <ul>
        <li>Child-friendly furniture and hygienic spaces</li>
        <li>CCTV surveillance and trained staff</li>
        <li>Biometric systems for children’s safety</li>
      </ul>
    `
  },

  active: {
    title: "Active Bodies",
    body: `
      <ul>
        <li><b>Movement-Based Learning:</b> Activities that combine physical movement with learning concepts to keep children engaged.</li>
        <li><b>Daily Physical Play:</b> Structured and free play sessions to promote fitness and flexibility.</li>
        <li><b>Outdoor Exploration:</b> Safe outdoor spaces for running, jumping, and nature-based activities.</li>
        <li><b>Indoor Activities:</b> Dance, music, and indoor movement sessions.</li>
        <li><b>Motor Skill Development:</b> Games and exercises designed to improve fine and gross motor skills.</li>
        <li><b>Healthy Habits:</b> Encouraging active lifestyles through fun exercises and age-appropriate sports.</li>
        <li><b>Energy Release:</b> Helping children channel energy positively and reduce restlessness.</li>
        <li><b>Balance & Coordination:</b> Obstacle courses and dance to improve posture and body control.</li>
        <li><b>Mind-Body Connection:</b> Yoga and mindfulness exercises to enhance focus and emotional well-being.</li>
      </ul>
    `
  }
};

// OPEN POPUP
document.querySelectorAll(".open-popup").forEach(btn => {
  btn.addEventListener("click", () => {
    const type = btn.dataset.type;
    popupTitle.innerHTML = data[type].title;
    popupBody.innerHTML = data[type].body;
    popup.style.display = "flex";
    document.body.style.overflow = "hidden"; // optional UX improvement
  });
});

// CLOSE POPUP
document.querySelector(".popup-close").onclick = () => {
  popup.style.display = "none";
  document.body.style.overflow = "";
};

popup.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
    document.body.style.overflow = "";
  }
};
