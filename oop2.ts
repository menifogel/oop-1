abstract class Person {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Patient extends Person {
    patientID: number;

    constructor(firstName: string, lastName: string, patientID: number ){
        super(firstName, lastName);
        this.patientID = patientID;
    }

    displayDetails(): string {
        return `Patient: ${this.firstName} ${this.lastName}, ID: ${this.patientID}`;
    }
}

class Doctor extends Person {
    doctorID: number;
    specialization: string;

    constructor(firstName: string, lastName: string, doctorID: number, specialization: string){
        super(firstName,lastName);
        this.doctorID = doctorID;
        this.specialization = specialization;
    }

    displayDetails(): string {
        return `Doctor: ${this.firstName} ${this.lastName}, ID: ${this.doctorID}, Specialization: ${this.specialization}`;
    }
}

class Appointment {
        patient: Patient;
        doctor: Doctor;
        date : string;
        time: string;
    
        constructor(patient: Patient, doctor: Doctor, date : string, time: string){
            this.patient = patient;
            this.doctor = doctor;
            this.date = date;
            this.time = time;
        }

    displayDetails(): string {
        return `Appointment Details - Date: ${this.date}, Time: ${this.time}\n${this.patient.displayDetails()}\n${this.doctor.displayDetails()}`;
    }
}

class Hospital {
    patients: Patient[] = [];
    doctors: Doctor[] = [];
    appointments: Appointment[] = [];
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    addNewPatient(patient: Patient): void {
        this.patients.push(patient);
    }

    addNewDoctor(doctor: Doctor): void {
        this.doctors.push(doctor);
    }

    addNewAppointment(appointment: Appointment): void {
        this.appointments.push(appointment);
    }
    displayAllAppointments(): void {
        console.log("All Appointments:");
        this.appointments.forEach((appointment) => {
            console.log(appointment.displayDetails());
        });
    }
    displayAppointmentsByPatientID(id: number): void {
        this.appointments.forEach((appointment) => {
            if (appointment.patient.patientID === id){
                console.log(appointment.displayDetails());
            } 
        });
    } 
    displayAppointmentsByDoctorID(id: number): void {
        this.appointments.forEach((appointment) => {
            if (appointment.doctor.doctorID === id){
                console.log(appointment.displayDetails());
            } 
        });
    } 
    displayAppointmentsToday(Todaydate: string): void {
        this.appointments.forEach((appointment) => {
            if (appointment.date == Todaydate){
                console.log(appointment.displayDetails());
            } 
        });   
    } 
}

const patient1 = new Patient("Menachem", "Cohen", 1);
const doctor1 = new Doctor("Dr. Stiv", "Smith", 101, "Cardiologist");
const appointment1 = new Appointment(patient1, doctor1, "2023-08-27", "10:00 AM");

const patient2 = new Patient("Sarah", "Johnson", 2);
const doctor2 = new Doctor("Dr. Emily", "Brown", 102, "Pediatrician");
const appointment2 = new Appointment(patient2, doctor2, "2023-08-28", "2:30 PM");

const patient3 = new Patient("David", "Lee", 3);
const doctor3 = new Doctor("Dr. Michael", "Wilson", 103, "Orthopedic Surgeon");
const appointment3 = new Appointment(patient3, doctor3, "2023-08-29", "11:15 AM");
const appointment4 = new Appointment(patient1, doctor2, "2023-08-30", "11:15 AM");

const hospital = new Hospital("My Hospital");
hospital.addNewPatient(patient1);
hospital.addNewDoctor(doctor1);
hospital.addNewAppointment(appointment1);
hospital.addNewPatient(patient2);
hospital.addNewDoctor(doctor2);
hospital.addNewAppointment(appointment2);
hospital.addNewAppointment(appointment4);
// hospital.displayAllAppointments()
// hospital.displayAppointmentsByPatientID(1)
// hospital.displayAppointmentsByDoctorID(102)
// hospital.displayAppointmentsToday("2023-08-28")

// console.log(hospital);
// console.log(appointment2.displayDetails());