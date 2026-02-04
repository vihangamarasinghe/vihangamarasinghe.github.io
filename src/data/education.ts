export type EducationItem = {
  degree: string;
  institution: string;
  graduation: string;
  honors: string[];
};

export const education: EducationItem[] = [
  {
    degree: 'Bachelor of Science (Honours) in Computer Science',
    institution: 'University of Peradeniya',
    graduation: 'Graduated: January 2025',
    honors: [
      'First Class Honours, CGPA 3.95 / 4.00 (Ranked #1)',
      'Department of Statistics and Computer Science Alumni Prize for Excellence in Computer Science'
    ]
  }
];
