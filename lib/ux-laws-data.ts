export interface UXLaw {
  id: number
  slug: string
  name: string
  description: string
  category: "Heuristic" | "Gestalt" | "Principle"
  keyTakeaways: string[]
  origin: string
  relatedLaws: string[]
}

export const uxLaws: UXLaw[] = [
  {
    id: 1,
    slug: "aesthetic-usability-effect",
    name: "Aesthetic-Usability Effect",
    description:
      "Users often perceive aesthetically pleasing design as design that's more usable.",
    category: "Heuristic",
    keyTakeaways: [
      "An aesthetically pleasing design creates a positive response in people's brains and leads them to believe the design actually works better.",
      "People are more tolerant of minor usability issues when the design of a product or service is aesthetically pleasing.",
      "Visually pleasing design can mask usability problems and prevent issues from being discovered during usability testing.",
    ],
    origin:
      "The aesthetic-usability effect was first studied in the field of human-computer interaction in 1995. Researchers Masaaki Kurosu and Kaori Kashimura from the Hitachi Design Center tested 26 variations of an ATM UI, asking 252 participants to rate each design on ease of use and aesthetic appeal. They found a stronger correlation between aesthetic appeal and perceived ease of use than between aesthetic appeal and actual ease of use — meaning users are strongly influenced by the aesthetics of an interface even when evaluating its functionality.",
    relatedLaws: ["Choice Overload", "Doherty Threshold", "Fitts's Law"],
  },
  {
    id: 2,
    slug: "choice-overload",
    name: "Choice Overload",
    description:
      "The tendency for people to get overwhelmed when they are presented with a large number of options.",
    category: "Principle",
    keyTakeaways: [
      "Having too many options can diminish users' decision-making capacity and negatively impact their overall experience satisfaction.",
      "Enable side-by-side comparison features for related items and pricing tiers when users must evaluate multiple choices.",
      "Reduce cognitive load by highlighting key products, implementing search and filtering, and narrowing choices upfront rather than presenting everything at once.",
    ],
    origin:
      "The concept of \"overchoice\" was introduced by Alvin Toffler in his 1970 book Future Shock. The phenomenon describes how selecting from an extensive variety of options can paradoxically harm decision-making processes rather than improve them. Subsequent research has confirmed that while some choice is better than none, too much choice leads to decision paralysis, decreased satisfaction, and regret.",
    relatedLaws: ["Hick's Law", "Doherty Threshold", "Fitts's Law"],
  },
  {
    id: 3,
    slug: "chunking",
    name: "Chunking",
    description:
      "A process by which individual pieces of an information set are broken down and then grouped together in a meaningful whole.",
    category: "Principle",
    keyTakeaways: [
      "Chunking allows users to scan content efficiently and identify information aligned with their goals, enabling faster task completion.",
      "Structure content into visually distinct groups with clear hierarchy to match how people naturally evaluate digital information.",
      "Grouping content into distinctive modules, applying separation rules, and providing hierarchy helps users grasp underlying relationships between elements.",
    ],
    origin:
      "Chunking derives from George A. Miller's influential 1956 paper exploring human cognitive capacity limits. Miller observed that while some cognitive tasks follow information-theory models, short-term memory functions differently. His research established the foundation for understanding how people process limited amounts of information by organizing them into meaningful chunks, which has become a cornerstone principle of information architecture and interface design.",
    relatedLaws: ["Cognitive Load", "Working Memory", "Miller's Law"],
  },
  {
    id: 4,
    slug: "cognitive-load",
    name: "Cognitive Load",
    description:
      "The amount of mental resources needed to understand and interact with an interface.",
    category: "Principle",
    keyTakeaways: [
      "When incoming information exceeds available mental capacity, users struggle — tasks become harder, details slip through, and overwhelm sets in.",
      "Intrinsic cognitive load involves the effort users expend absorbing new information, retaining relevant details, and pursuing their objectives.",
      "Extraneous cognitive load encompasses mental processing that consumes resources without aiding comprehension, such as superfluous design elements or confusing navigation.",
    ],
    origin:
      "John Sweller developed cognitive load theory in the late 1980s while studying problem-solving, building on George Miller's earlier information processing work. His 1988 publication \"Cognitive Load Theory, Learning Difficulty, and Instructional Design\" established instructional design as a tool for reducing cognitive burden in learners. The theory distinguishes between intrinsic load (inherent difficulty), extraneous load (unnecessary difficulty from poor design), and germane load (effort toward building understanding).",
    relatedLaws: ["Chunking", "Miller's Law", "Hick's Law"],
  },
  {
    id: 5,
    slug: "doherty-threshold",
    name: "Doherty Threshold",
    description:
      "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
    category: "Principle",
    keyTakeaways: [
      "Deliver system feedback within 400 milliseconds to maintain user attention and boost productivity.",
      "Leverage perceived performance techniques to enhance response time and minimize the perception of waiting.",
      "Use animation to engage users visually during background processing, and implement progress bars to make delays feel more acceptable.",
    ],
    origin:
      "In 1982, Walter J. Doherty and Ahrvind J. Thadani published research in the IBM Systems Journal that established 400 milliseconds as the critical response time threshold — replacing the previous industry standard of 2 seconds. Their research demonstrated that when a computer system responded within this 400ms window, the interaction was described as \"addicting\" to users, as it created a flow state where neither human nor machine was waiting on the other.",
    relatedLaws: [
      "Choice Overload",
      "Fitts's Law",
      "Goal-Gradient Effect",
    ],
  },
  {
    id: 6,
    slug: "fitts-law",
    name: "Fitts's Law",
    description:
      "The time to acquire a target is a function of the distance to and size of the target.",
    category: "Heuristic",
    keyTakeaways: [
      "Touch targets should be large enough for users to accurately select them.",
      "Touch targets should have ample spacing between them to prevent accidental taps.",
      "Touch targets should be placed in areas of an interface that allow them to be easily acquired, minimizing the distance users must travel.",
    ],
    origin:
      "In 1954, psychologist Paul Fitts studied the human motor system and discovered that the time required to move to a target depends on the distance to it, yet relates inversely to its size. He identified a speed-accuracy trade-off: rapid movements toward smaller targets produce higher error rates. This principle became foundational to user experience and interface design, particularly influencing the convention of creating larger interactive buttons for mobile devices and minimizing distances between user attention areas and task-related controls.",
    relatedLaws: [
      "Law of Common Region",
      "Law of Proximity",
      "Doherty Threshold",
    ],
  },
  {
    id: 7,
    slug: "goal-gradient-effect",
    name: "Goal-Gradient Effect",
    description:
      "The tendency to approach a goal increases with proximity to the goal.",
    category: "Heuristic",
    keyTakeaways: [
      "Users accelerate their behavior as they get closer to completing a task or reaching a goal.",
      "Providing artificial progress indicators — like pre-stamped loyalty cards — can boost motivation to complete tasks.",
      "Clear progress visualization, such as progress bars and step indicators, encourages users to follow through to completion.",
    ],
    origin:
      "Behaviorist Clark Hull first introduced the goal-gradient hypothesis in 1932, proposing that the tendency to approach a goal increases with proximity to the goal. His 1934 experiments with rats demonstrated that animals ran faster as they approached a food reward. While animal studies extensively validated this concept, it wasn't until later consumer research — particularly Ran Kivetz's investigation into loyalty programs — that the principle was applied to understanding human motivation and digital product design.",
    relatedLaws: [
      "Doherty Threshold",
      "Peak-End Rule",
      "Hick's Law",
    ],
  },
  {
    id: 8,
    slug: "hicks-law",
    name: "Hick's Law",
    description:
      "The time it takes to make a decision increases with the number and complexity of choices.",
    category: "Heuristic",
    keyTakeaways: [
      "Minimize the number of choices when response times are critical to decrease decision time.",
      "Break complex tasks into smaller steps to reduce cognitive load and guide users through a process.",
      "Highlight recommended options to reduce decision time, and use progressive onboarding to minimize cognitive load for new users.",
    ],
    origin:
      "Hick's Law (also known as the Hick-Hyman Law) originated from research by British psychologist William Edmund Hick and American psychologist Ray Hyman. In 1952, they examined the relationship between the number of stimuli present and an individual's reaction time to any given stimulus. Their findings demonstrated that increasing the number of choices logarithmically increases decision time, creating unnecessary cognitive burden on users who must process each option before acting.",
    relatedLaws: [
      "Choice Overload",
      "Cognitive Load",
      "Miller's Law",
    ],
  },
  {
    id: 9,
    slug: "jakobs-law",
    name: "Jakob's Law",
    description:
      "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
    category: "Heuristic",
    keyTakeaways: [
      "Users transfer expectations they have built around one familiar product to another that appears similar.",
      "By leveraging existing mental models, designers can create superior user experiences where users focus on their tasks rather than learning new interaction patterns.",
      "When making changes, minimize discord by empowering users to continue using a familiar version for a limited time during transitions.",
    ],
    origin:
      "Jakob's Law was articulated by Jakob Nielsen, a User Advocate and principal of the Nielsen Norman Group, which he co-founded with Dr. Donald A. Norman (former VP of research at Apple Computer). Nielsen pioneered the \"discount usability engineering\" movement for fast and cheap improvements of user interfaces and invented several usability methods, including heuristic evaluation. His law reflects decades of observation that users build up expectations from the cumulative experience of using other websites and applications.",
    relatedLaws: [
      "Law of Similarity",
      "Aesthetic-Usability Effect",
      "Peak-End Rule",
    ],
  },
  {
    id: 10,
    slug: "law-of-common-region",
    name: "Law of Common Region",
    description:
      "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
    category: "Gestalt",
    keyTakeaways: [
      "Common region creates a clear structure and helps users quickly understand the relationship between elements and sections.",
      "Adding a border around a group of elements creates an effective common region that signals they are related.",
      "A clearly defined background behind a group of elements also establishes common region and perceived grouping.",
    ],
    origin:
      "The Law of Common Region is one of several Gestalt principles of grouping, first proposed by Gestalt psychologists to explain how humans naturally perceive visual elements as organized patterns. These principles — which include Proximity, Similarity, Continuity, Closure, and Connectedness — describe the mind's innate disposition to perceive patterns in stimuli based on certain rules. The concept of Pr\u00e4gnanz, or the tendency toward the simplest possible interpretation, underlies all of these principles.",
    relatedLaws: [
      "Law of Proximity",
      "Law of Similarity",
      "Fitts's Law",
    ],
  },
  {
    id: 11,
    slug: "law-of-proximity",
    name: "Law of Proximity",
    description:
      "Objects that are near, or proximate to each other, tend to be grouped together.",
    category: "Gestalt",
    keyTakeaways: [
      "Proximity helps establish relationships with nearby objects, signaling to users that these elements are related.",
      "Elements in close proximity are perceived as sharing similar functionality or characteristics.",
      "Proximity enables users to comprehend and organize information with greater speed and efficiency.",
    ],
    origin:
      "The Law of Proximity is one of the foundational Gestalt principles of grouping, which were introduced by Gestalt psychologists to explain how humans naturally perceive organized patterns from visual stimuli. The researchers proposed that the mind has an innate tendency to organize stimuli based on specific rules. Along with Similarity, Continuity, Closure, and Connectedness, Proximity is a key principle that designers use to create clear visual hierarchies and intuitive layouts.",
    relatedLaws: [
      "Law of Common Region",
      "Law of Similarity",
      "Law of Common Region",
    ],
  },
  {
    id: 12,
    slug: "law-of-similarity",
    name: "Law of Similarity",
    description:
      "The human eye tends to perceive similar elements as a complete picture, shape, or group, even if those elements are separated.",
    category: "Gestalt",
    keyTakeaways: [
      "Elements that are visually similar are naturally perceived as related by users.",
      "Color, shape, size, orientation, and movement can all indicate that elements belong together and share meaning or functionality.",
      "Links and navigation systems should be visually differentiated from normal text elements to ensure they are consistently recognizable.",
    ],
    origin:
      "Like other Gestalt grouping principles, the Law of Similarity was proposed by Gestalt psychologists who studied how humans naturally perceive organized patterns. The principle of Pr\u00e4gnanz — the mind's tendency toward perceiving the simplest coherent patterns — underlies this law. The five Gestalt grouping principles (Proximity, Similarity, Continuity, Closure, and Connectedness) work together to explain how we visually organize and make sense of complex interfaces.",
    relatedLaws: [
      "Law of Common Region",
      "Law of Proximity",
      "Jakob's Law",
    ],
  },
  {
    id: 13,
    slug: "millers-law",
    name: "Miller's Law",
    description:
      "The average person can only keep 7 (plus or minus 2) items in their working memory.",
    category: "Heuristic",
    keyTakeaways: [
      "Don't use the \"magical number seven\" to justify unnecessary design limitations — the number is about chunks of information, not a strict UI rule.",
      "Organize content into smaller chunks to help users process, understand, and remember information more effectively.",
      "Remember that short-term memory capacity varies among individuals based on their prior knowledge, context, and the nature of the information.",
    ],
    origin:
      "In 1956, cognitive psychologist George Miller published one of the most highly cited papers in psychology, proposing that the span of immediate memory and absolute judgment were both limited to around 7 pieces of information. His work centered on the concept of \"channel capacity\" — the threshold beyond which confusion leads to increasingly inaccurate judgment. Miller's insight was that chunking information into meaningful groups could effectively extend the practical limits of working memory.",
    relatedLaws: ["Chunking", "Cognitive Load", "Hick's Law"],
  },
  {
    id: 14,
    slug: "peak-end-rule",
    name: "Peak-End Rule",
    description:
      "People judge an experience largely based on how they felt at its peak and at its end, rather than the total sum or average.",
    category: "Principle",
    keyTakeaways: [
      "Pay close attention to the most intense points and the final moments of the user journey, as these disproportionately shape how the experience is remembered.",
      "Identify the moments when your product is most helpful, valuable, or entertaining — and design to amplify those peaks.",
      "Remember that people recall negative experiences more vividly than positive ones, so minimizing frustration at peak moments is critical.",
    ],
    origin:
      "The Peak-End Rule was demonstrated in a landmark 1993 study by Daniel Kahneman, Barbara Fredrickson, Charles Schreiber, and Donald Redelmeier. In the experiment, subjects were exposed to uncomfortable cold temperatures in two different trials. Participants consistently preferred to repeat the longer trial that ended with a slightly warmer temperature over the shorter, more uniformly cold trial — showing that the memory of the experience's ending shaped preference more than the actual total duration of discomfort.",
    relatedLaws: [
      "Aesthetic-Usability Effect",
      "Goal-Gradient Effect",
      "Doherty Threshold",
    ],
  },
  {
    id: 15,
    slug: "teslers-law",
    name: "Tesler's Law",
    description:
      "For any system there is a certain amount of complexity which cannot be reduced.",
    category: "Principle",
    keyTakeaways: [
      "Every process has a core of irreducible complexity that cannot be designed away — it must be managed by either the system or the user.",
      "Designers should ensure that as much of the inherent complexity as possible is handled by the system rather than transferred to the user.",
      "Be careful not to simplify an interface so much that it becomes abstract or unclear — some complexity serves the user's needs.",
    ],
    origin:
      "Larry Tesler, while working at Xerox PARC in the mid-1980s, recognized that the way users interact with software was just as important as the application itself. He argued that engineers should spend extra development time reducing complexity in the application rather than forcing millions of users to spend extra time navigating unnecessarily complicated interfaces. Bruce Tognazzini later expanded on this idea, observing that users tend to respond to simplified applications by attempting more complex tasks — a natural balancing of complexity.",
    relatedLaws: [
      "Choice Overload",
      "Hick's Law",
      "Cognitive Load",
    ],
  },
]

export function getLawBySlug(slug: string): UXLaw | undefined {
  return uxLaws.find((law) => law.slug === slug)
}

export function getAdjacentLaws(slug: string): { prev: UXLaw | undefined; next: UXLaw | undefined } {
  const index = uxLaws.findIndex((law) => law.slug === slug)
  return {
    prev: index > 0 ? uxLaws[index - 1] : undefined,
    next: index < uxLaws.length - 1 ? uxLaws[index + 1] : undefined,
  }
}
