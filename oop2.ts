class Person {
    firstName: string
    lastName: string

    
    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName
    }
}

class Patient extends Person {
    patientID: number;

    constructor(firstName: string, lastName: string, patientID: number ){
        super(firstName, lastName);
        this.patientID = patientID;
    }
    dataPatient(): string | number {
        return `the data of the patient ${this.firstName} ${this.lastName} is , id: ${this.patientID}`
    }
}

class Doctor extends Person {
    doctorID: number;
    specialization: string;

    constructor(firstName: string, lastName: string, doctorID: number, specialization: string){
        super(firstName,lastName)
        this.doctorID = doctorID;
        this.specialization = specialization;
    }
    dataDoctor(): string | number {
        return `the data of the doctor ${this.firstName} ${this.lastName} is , id: ${this.doctorID}, specialize in :${this.specialization}`
    }
}

class Appointment {
    Patient: Patient;
    Doctor: Doctor;
    Date : string;
    time: string;

    constructor(Patient: Patient, Doctor: Doctor, Date : string, time: string){
        this.Patient = Patient;
        this.Doctor = Doctor;
        this.Date = Date;
        this.time = time;
    }

    dataAppointment(){
        return `the oppointmet of patient ${Patient} in doctor ${Doctor} is in day ${this.Date} in the time ${this.time}`
    }
}

class Hospital {
    Patient: Patient[];
    Doctor: Doctor[];
    Appointment: Appointment[];
    Name: string;

    
    constructor(Patient: Patient[], Doctor: Doctor[], Appointment: Appointment[],  Name: string){
        this.Patient = Patient;
        this.Doctor = Doctor;
        this.Appointment = Appointment;
        this.Name = Name;
    }
    addNewPatient(Patient: Patient):void {
        this.Patient.push(Patient)
    }
    addNewDoctor(Doctor: Doctor):void {
        this.Doctor.push(Doctor)
    }
    addNewAppointment(Appointment: Appointment):void{
        this.Appointment.push(Appointment)
    }

}




const patient1 = new Patient("menachem", "cohen", 1);
const doctor1 = new Doctor("Dr. stiv", "Smith", 101, "Cardiologist");
const appointment1 = new Appointment(patient1, doctor1, "2023-08-27", "10:00 AM");
const hospital = new Hospital([patient1],[doctor1],[appointment1],'rmbm');
console.log(hospital);


// let d = new Doctor('meni','fogel',123123,'noirolog')
// let dataD = d.dataDoctor()
// console.log(dataD)