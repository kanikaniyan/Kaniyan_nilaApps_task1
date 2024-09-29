export interface Course {
    courseId: string;
    courseName: string;
    courseType: string;
    coursePeriod: string;
    credits: Credits;
    totalStudents: number;
    courseAverageMark: number;
    courseOutcomes: string[];
    mappedPOs: string[];
}

export interface Credits {
    lecture: number;
    tutorial: number;
    practical: number;
    project: number;
}

export interface Attendance {
    week: string;
    percentage: number;
}

export interface AssessmentProgress {
    category: string;
    tasks: Task[];
}

export interface Task {
    task: string;
    status: string;
    pending: number;
    completed: number;
}

export interface AssessmentData {
    courseOutcomeAttainments: CourseOutcomeAttainment[];
    overallCourseOutcomeAttainment: OverallCourseOutcomeAttainment;
}

export interface OverallCourseOutcomeAttainment {
    totalStudents: number;
    evaluationProgress: number;
    categories: CourseOutcomeAttainment[];
}

export interface CourseOutcomeAttainment {
    label: string;
    value: number;
    color: string;
}