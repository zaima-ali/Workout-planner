export type Goal='Lose Body Fat'|'Build Muscle'|'Gain Strength'|'Improve General Fitness'|'Improve Endurance'|'Improve Mobility & Flexibility'|'Maintain Current Fitness'|'Improve Functional Fitness'|'Healthy Aging / Stay Active';
export type Level='Beginner'|'Intermediate'|'Advanced';
export type Movement='Squat'|'Hinge'|'Horizontal Push'|'Horizontal Pull'|'Vertical Push'|'Vertical Pull'|'Core'|'Cardio'|'Mobility';
export interface Assessment{name:string;age:number;gender:string;heightCm:number;weightKg:number;goal:Goal|'';secondary:string;level:Level;activity:string;location:string;equipment:string[];preferences:string[];avoid:string;days:number;duration:string;preferredDays:string[];weeks:number;hasLimitations:boolean;limitations:string[];limitationText:string;redFlags:string[]}
export interface Exercise{name:string;movement:Movement;primary:string;equipment:string[];difficulty:Level[];goals:Goal[];avoidTags:string[];reps:string;cue:string;alternatives:string[]}
export interface WorkoutExercise extends Exercise{sets:number;rest:string;rpe:string}
export interface Workout{day:string;title:string;warmup:string;exercises:WorkoutExercise[];cardio?:string;cooldown:string}
export interface Plan{strategy:string;schedule:{day:string;activity:string}[];workouts:Workout[];progression:{phase:string;weeks:string;description:string}[];safety:string[]}
