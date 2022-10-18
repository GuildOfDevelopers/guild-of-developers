import React, { FC } from 'react';
import { Container } from '../../lib/styled/container';
import Filter from '../Filter';
import Project from './Project';
import { Grid, Section, Title, Wrapper } from './style';
import { ProjectResponce } from '../../store/types';
import { useGetProjectsQuery } from '../../store/dataSlice';

interface ProjectsProps {
  page: string;
}

interface ProjectsWithoutFilterProps {
  data: ProjectResponce | undefined;
}

interface ProjectsWithFilterProps {
  data: ProjectResponce | undefined;
}

const ProjectsWithoutFilter: FC<ProjectsWithoutFilterProps> = ({ data }) => {
  return (
    <Wrapper>
      <Title>Наши проекты</Title>
      <Grid>
        {data?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const ProjectsWithFilter: FC<ProjectsWithFilterProps> = ({ data }) => {
  return (
    <Wrapper>
      <Title>Проекты</Title>
      <Filter page="projects" />
      <Grid>
        {data?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Projects: FC<ProjectsProps> = ({ page }) => {
  const { data, isLoading, isError } = useGetProjectsQuery('');

  if (isLoading) {
    return (
      <Section>
        <Container>
          <Wrapper>
            <Title>Загрузка...</Title>;
          </Wrapper>
        </Container>
      </Section>
    );
  }

  if (isError) {
    return (
      <Section>
        <Container>
          <Wrapper>
            <Title>Ошибка</Title>;
          </Wrapper>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        {page === 'home' && <ProjectsWithoutFilter data={data} />}
        {page === 'projects' && <ProjectsWithFilter data={data} />}
      </Container>
    </Section>
  );
};

export default Projects;
