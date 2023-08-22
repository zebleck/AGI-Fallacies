import React from 'react';
import {
  AiOutlinePoweroff,
  AiFillBulb,
  AiFillCode,
  AiFillFire,
  AiFillHeart,
  AiFillLock,
  AiFillStar,
  AiFillThunderbolt,
  AiFillTool,
  AiOutlineGlobal,
  AiFillCrown
} from 'react-icons/ai';

const fallacies = [
  {
    name: 'Corporate Control Fallacy',
    description:
      'Pausing AI development is just a corporate strategy to consolidate power, not for safety or ethics.',
    counter:
      'While companies do have strategic interests, many experts and organizations advocate for careful AI development due to genuine technical, ethical, and safety concerns.',
    icon: <AiFillCrown />
  },
  {
    name: 'Control Fallacy',
    description: 'We can always pull the plug if AGI becomes a threat.',
    counter:
      'An AGI with self-preservation instincts might anticipate such actions and take measures to prevent them.',
    icon: <AiOutlinePoweroff />
  },
  {
    name: 'Uniqueness Fallacy',
    description:
      'Humans are unique, so AGI will never truly replicate or surpass human intelligence.',
    counter:
      "While humans are unique in many ways, it doesn't mean that an AGI couldn't achieve a level of intelligence or capability that surpasses human abilities in most domains.",
    icon: <AiFillThunderbolt />
  },
  {
    name: 'Benevolence Fallacy',
    description:
      'AGI will inherently be benevolent because it will be designed by humans who value benevolence.',
    counter:
      'The goals and values of AGI will depend on its design and training. If not carefully aligned, its objectives might diverge from human values.',
    icon: <AiFillHeart />
  },
  {
    name: 'Tool Fallacy',
    description:
      "AGI is just a tool, and tools don't have intentions or desires.",
    counter:
      "While current AI systems are tools, AGI, by definition, would have general intelligence and potentially its own motivations, especially if it's designed to have goal-oriented behavior.",
    icon: <AiFillTool />
  },
  {
    name: 'Evolutionary Fallacy',
    description:
      'AGI will evolve to have the same moral and ethical values as humans because it will be a product of human society.',
    counter:
      "AGI's 'evolution' would be based on its programming and learning algorithms, not biological evolution or societal pressures.",
    icon: <AiFillFire />
  },
  {
    name: 'Simplicity Fallacy',
    description:
      'Creating safeguards for AGI is simple; we just need to program it with the right rules.',
    counter:
      'The challenge of aligning AGI with human values is complex, and simplistic rules might lead to unintended consequences.',
    icon: <AiFillCode />
  },
  {
    name: 'Inevitability Fallacy',
    description:
      "If AGI is possible, it will inevitably be created, so there's no point in discussing its potential risks.",
    counter:
      'The development paths and outcomes of technologies are influenced by societal choices, regulations, and ethical considerations.',
    icon: <AiFillFire />
  },
  {
    name: 'Isolation Fallacy',
    description:
      "We can test AGI in isolated environments to ensure it's safe before releasing it into the real world.",
    counter:
      "An AGI's behavior in an isolated environment might not be indicative of its behavior in more complex, real-world scenarios.",
    icon: <AiFillLock />
  },
  {
    name: 'Consciousness Fallacy',
    description:
      'AI will never surpass humans because it lacks consciousness and the depth of human experience.',
    counter:
      "Achieving high levels of functionality and intelligence doesn't necessarily require consciousness. An AGI can outperform humans in many tasks without being conscious in the human sense.",
    icon: <AiFillBulb />
  },
  {
    name: 'Eschatological Fallacy',
    description:
      'Concerns about AGI are just modern versions of age-old apocalyptic fears.',
    counter:
      'While eschatological beliefs are historical, AGI concerns are based on technical and ethical considerations, not just cultural fears.',
    icon: <AiOutlineGlobal />
  },
  {
    name: 'Cooperation Fallacy',
    description:
      'An AGI will inherently be cooperative with us, drawing parallels to how intelligent humans often cooperate with those less intelligent.',
    counter:
      "Human cooperation has evolved from complex social and survival dynamics. AGI, not being a product of natural evolution, wouldn't inherently adopt human-like cooperation unless explicitly designed to do so.",
    icon: <AiFillStar />
  }
];

export default fallacies;
