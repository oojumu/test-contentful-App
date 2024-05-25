
import { useFetchProjects } from  './fetchProjects';

const Projects = () => {

    const {loading, projects } = useFetchProjects();

    console.log(loading, projects);
    if (loading)
    {
 
          return (
          <section className='projects'> 
                 <h3>Loading....</h3>
          </section>);
    }


    return(
        <section>
            <div className='projects'>
                <div className='title'>
                    <h2>Projects</h2>
                </div>

                <div className='title-underline'>
                    
                </div>

                <div className='projects-center'>
                {projects.map((project) => {
                const {id, img, url, title} = project;
                return (
                    <a
                        key={id}
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        className='project'>
                        

                        <img src={img} alt={title} className='img' />
                        <h5>{title}</h5>
                    </a>
                );
            })}
                </div>
            </div>
        </section>
    )



};


export default Projects

