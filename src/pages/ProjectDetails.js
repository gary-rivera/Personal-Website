// import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import styled from 'styled-components';
// import { movieState } from '../movieState';

// //animations
// import { motion } from "framer-motion";
// import { pageAnimation } from "../animation"


// function ProjectDetails() {
//   const history = useHistory();
//   const url = history.location.pathname;

//   const [movies, setMovies] = useState(movieState);
//   const [movie, setMovie] = useState(null);

//   useEffect(() => {
//     const currentMovie = movies.filter((stateMovie) => {
//       return stateMovie.url === url;
//     });
//     setMovie(currentMovie[0]);

//   }, [movies, url]);
  
//   return (
//     <> 
//     { movie && 
//       <DetailsStyle
//         variants={pageAnimation}
//         initial="hidden"
//         animate="show"
//         exit="exit"
//       >  
//         <HeadlineStyle>
//           <h2>{movie.title}</h2>
//           <img src={movie.mainImg} alt={movie.title}/>
//         </HeadlineStyle>
//         <AwardsStyle>
//           { movie.awards.map((award) => (
//             <Award
//               title={award.title}
//               description={award.description}
//               key={award.title}
//             />
//           ))}
//         </AwardsStyle>
//       </DetailsStyle>
//     } 
//     </>
//   )
// }

// const DetailsStyle = styled(motion.div)`
//   color: white;
// `;
// const HeadlineStyle = styled.div`
//   min-height: 90vh;
//   padding-top: 20vh;
//   position: relative;
//   h2 {
//     position: absolute;
//     top: 10%;
//     left: 50%;
//     transform: translate(-50%, -10%);
//   }
//   img {
//     width: 100%;
//     height: 70vh;
//     object-fit: cover;
//   }
// `;
// const AwardsStyle = styled.div`
//   min-height: 80vh;
//   display: flex;
//   margin: 5rem 10rem;
//   align-items: center;
//   justify-content: space-around;
//   @media (max-width: 1500px) {
//     display: block;
//     margin: 2rem 2rem;
//   }
// `;
// const AwardStyle = styled.div`
//   padding: 5rem;
//   h3 {
//     font-size: 2rem;
//   }
//   .line {
//     width: 100%;
//     background: #23d997;
//     height: 0.5rem;
//     margin: 1rem 0rem;
//   }
//   p {
//     padding: 2rem 0rem;
//   }
// `;
// const ImageDisplayStyle = styled.div`
//   min-height: 50vh;
//   img {
//     width: 100%;
//     height: 100vh;
//     object-fit: cover;
//   }
// `;
// //TODO: make a seperate component
// //Award Component
// const Award = ({ title, description }) => {
//   return (
//     <AwardStyle>
//       <h3>{title}</h3>
//       <div className="line"></div>
//       <p>{description}</p>
//     </AwardStyle>
//   );
// };

// export default ProjectDetails;