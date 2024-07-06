/* istanbul ignore file */
import { Skill } from '@types';
import { FaReact, FaAws, FaNodeJs, FaCss3Alt, FaHtml5 } from 'react-icons/fa';
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiGraphql,
  SiCypress,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiUnity,
  SiDocker,
  SiCsharp,
  SiRedux,
  SiConcourse,
  SiGnubash,
  SiNestjs,
  SiGodotengine,
  SiMysql
} from 'react-icons/si';
import { DiGit } from 'react-icons/di';

export const frontEnd: Skill[] = [
  {
    label: 'Typescript',
    Icon: SiTypescript
  },
  {
    label: 'Javascript',
    Icon: SiJavascript
  },
  {
    label: 'React',
    Icon: FaReact
  },
  {
    label: 'Redux',
    Icon: SiRedux
  },
  {
    label: 'CSS',
    Icon: FaCss3Alt
  },
  {
    label: 'HTML',
    Icon: FaHtml5
  },
  {
    label: 'Cypress',
    Icon: SiCypress
  },
  {
    label: 'Jest',
    Icon: SiJest
  },
  {
    label: 'Next.js',
    Icon: SiNextdotjs
  }
];

export const backEnd: Skill[] = [
  {
    label: 'Typescript',
    Icon: SiTypescript
  },
  {
    label: 'Javascript',
    Icon: SiJavascript
  },
  {
    label: 'Node',
    Icon: FaNodeJs
  },
  {
    label: 'Express',
    Icon: SiExpress
  },
  {
    label: 'NestJS',
    Icon: SiNestjs
  },
  {
    label: 'GraphQL',
    Icon: SiGraphql
  },
  {
    label: 'PostgreSQL',
    Icon: SiPostgresql
  },
  {
    label: 'MySQL',
    Icon: SiMysql
  }
];

export const devOps: Skill[] = [
  {
    label: 'AWS',
    Icon: FaAws
  },
  {
    label: 'Docker',
    Icon: SiDocker
  },
  {
    label: 'Concourse',
    Icon: SiConcourse
  },
  {
    label: 'Bash',
    Icon: SiGnubash
  }
];

export const other: Skill[] = [
  {
    label: 'Unity',
    Icon: SiUnity
  },
  {
    label: 'C#',
    Icon: SiCsharp
  },
  {
    label: 'Git',
    Icon: DiGit
  },
  {
    label: 'Godot',
    Icon: SiGodotengine
  }
];
