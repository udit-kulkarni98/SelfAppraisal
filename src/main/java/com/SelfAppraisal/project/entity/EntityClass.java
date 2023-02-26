package com.SelfAppraisal.project.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FacultyData")
public class EntityClass {

@Id
private long id;
	
@Column(columnDefinition="TEXT")
private String designation;

@Column(columnDefinition="TEXT")
private String department;

@Column(columnDefinition="TEXT")
 private String year;

@Column(columnDefinition="TEXT")
private String name;

@Column(columnDefinition="TEXT")
private String dob;

@Column(columnDefinition="TEXT")
private String qualifications;

@Column(columnDefinition="TEXT")
private String subjectsTaught;

@Column(columnDefinition="TEXT")
private String doa;

@Column(columnDefinition="TEXT")
private String experience;

@Column(columnDefinition="TEXT")
private String researchQualification;

@Column(columnDefinition="TEXT")
private String ugoddseml; 

@Column(columnDefinition="TEXT")
private String ugoddsemt;

@Column(columnDefinition="TEXT")
private String ugoddsemp;

@Column(columnDefinition="TEXT")
private String ugevenseml;

@Column(columnDefinition="TEXT")
private String ugevensemt;

@Column(columnDefinition="TEXT")
private String ugevensemp;

@Column(columnDefinition="TEXT")
private String pgoddseml;


@Column(columnDefinition="TEXT")
private String pgoddsemt;

@Column(columnDefinition="TEXT")
private String pgoddsemp;

@Column(columnDefinition="TEXT")
private String pgevenseml;

@Column(columnDefinition="TEXT")
private String pgvensemt;

@Column(columnDefinition="TEXT")
private String pgevensemp;

@Column(columnDefinition="TEXT")
private String twl;

@Column(columnDefinition="TEXT")
private String twt;

@Column(columnDefinition="TEXT")
private String twp;

@Column(columnDefinition="TEXT")
private String oddSem;

@Column(columnDefinition="TEXT")
private String evenSem;

@Column(columnDefinition="TEXT")
private String sem1;

@Column(columnDefinition="TEXT")
private String sub1;

@Column(columnDefinition="TEXT")
private String noltar1;

@Column(columnDefinition="TEXT")
private String noltak1;

@Column(columnDefinition="TEXT")
private String sem2;

@Column(columnDefinition="TEXT")
private String sub2;

@Column(columnDefinition="TEXT")
private String noltar2;

@Column(columnDefinition="TEXT")
private String noltak2;

@Column(columnDefinition="TEXT")
private String sem3;

@Column(columnDefinition="TEXT")
private String sub3;

@Column(columnDefinition="TEXT")
private String noltar3;

@Column(columnDefinition="TEXT")
private String noltak3;

@Column(columnDefinition="TEXT")
private String evaluationTechniques;

@Column(columnDefinition="TEXT")
private String csob;

@Column(columnDefinition="TEXT")
private String cstt;

@Column(columnDefinition="TEXT")
private String csdu;

@Column(columnDefinition="TEXT")
private String csgrade;

@Column(columnDefinition="TEXT")
private String wob;

@Column(columnDefinition="TEXT")
private String wtt;

@Column(columnDefinition="TEXT")
private String wdu;

@Column(columnDefinition="TEXT")
private String wgrade;

@Column(columnDefinition="TEXT")
private String stob;

@Column(columnDefinition="TEXT")
private String sttt;

@Column(columnDefinition="TEXT")
private String stdu;

@Column(columnDefinition="TEXT")
private String stgrade;

@Column(columnDefinition="TEXT")
private String rpapers;

@Column(columnDefinition="TEXT")
private String rprojects;

@Column(columnDefinition="TEXT")
private String rgrants;

@Column(columnDefinition="TEXT")
private String nor1;

@Column(columnDefinition="TEXT")
private String noi1;

@Column(columnDefinition="TEXT")
private String des1;

@Column(columnDefinition="TEXT")
private String dur1;

@Column(columnDefinition="TEXT")
private String nor2;

@Column(columnDefinition="TEXT")
private String noi2;

@Column(columnDefinition="TEXT")
private String des2;

@Column(columnDefinition="TEXT")
private String dur2;

@Column(columnDefinition="TEXT")
private String nor3;

@Column(columnDefinition="TEXT")
private String noi3;

@Column(columnDefinition="TEXT")
private String des3;

@Column(columnDefinition="TEXT")
private String dur3;

@Column(columnDefinition="TEXT")
private String nor4;

@Column(columnDefinition="TEXT")
private String noi4;

@Column(columnDefinition="TEXT")
private String des4;

@Column(columnDefinition="TEXT")
private String dur4;

@Column(columnDefinition="TEXT")
private String spiti1;

@Column(columnDefinition="TEXT")
private String spiti2;

@Column(columnDefinition="TEXT")
private String aictei1;

@Column(columnDefinition="TEXT")
private String aicte2;

@Column(columnDefinition="TEXT")
private String dte1;

@Column(columnDefinition="TEXT")
private String dte2;

@Column(columnDefinition="TEXT")
private String mum1;

@Column(columnDefinition="TEXT")
private String mum2;

@Column(columnDefinition="TEXT")
private String any1;

@Column(columnDefinition="TEXT")
private String any2;

@Column(columnDefinition="TEXT")
private String goal1;

@Column(columnDefinition="TEXT")
private String goal2;

@Column(columnDefinition="TEXT")
private String goal3;

@Column(columnDefinition="TEXT")
private String dev1;

@Column(columnDefinition="TEXT")
private String dev2;

@Column(columnDefinition="TEXT")
private String anyotherinformation;

@Column(columnDefinition="TEXT")
private String semester1;

@Column(columnDefinition="TEXT")
private String subject1;

@Column(columnDefinition="TEXT")
private String pf1;

@Column(columnDefinition="TEXT")
private String cf1;

@Column(columnDefinition="TEXT")
private String semester2;

@Column(columnDefinition="TEXT")
private String subject2;

@Column(columnDefinition="TEXT")
private String pf2;

@Column(columnDefinition="TEXT")
private String semester3;

@Column(columnDefinition="TEXT")
private String subject3;

@Column(columnDefinition="TEXT")
private String pf3;

@Column(columnDefinition="TEXT")
private String semester4;

@Column(columnDefinition="TEXT")
private String subject4;

@Column(columnDefinition="TEXT")
private String pf4;

@Column(columnDefinition="TEXT")
private String semester5;

@Column(columnDefinition="TEXT")
private String subject5;

@Column(columnDefinition="TEXT")
private String pf5;

@Column(columnDefinition="TEXT")
private String semester6;

@Column(columnDefinition="TEXT")
private String subject6;

@Column(columnDefinition="TEXT")
private String pf6;

@Column(columnDefinition="TEXT")
private String semester7;

@Column(columnDefinition="TEXT")
private String subject7;

@Column(columnDefinition="TEXT")
private String pf7;


public String getYear() {
	return year;
}

public void setYear(String year) {
	this.year = year;
}

public String getName() {
	return name;
}

public void setName(String name) {
	this.name = name;
}

public String getDob() {
	return dob;
}

public void setDob(String dob) {
	this.dob = dob;
}

public String getQualifications() {
	return qualifications;
}

public void setQualifications(String qualifications) {
	this.qualifications = qualifications;
}

public String getSubjectsTaught() {
	return subjectsTaught;
}

public void setSubjectsTaught(String subjectsTaught) {
	this.subjectsTaught = subjectsTaught;
}

public String getDoa() {
	return doa;
}

public void setDoa(String doa) {
	this.doa = doa;
}

public String getExperience() {
	return experience;
}

public void setExperience(String experience) {
	this.experience = experience;
}

public String getResearchQualification() {
	return researchQualification;
}

public void setResearchQualification(String researchQualification) {
	this.researchQualification = researchQualification;
}

public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

public String getUgoddseml() {
	return ugoddseml;
}

public void setUgoddseml(String ugoddseml) {
	this.ugoddseml = ugoddseml;
}

public String getUgoddsemt() {
	return ugoddsemt;
}

public void setUgoddsemt(String ugoddsemt) {
	this.ugoddsemt = ugoddsemt;
}

public String getUgoddsemp() {
	return ugoddsemp;
}

public void setUgoddsemp(String ugoddsemp) {
	this.ugoddsemp = ugoddsemp;
}

public String getUgevenseml() {
	return ugevenseml;
}

public void setUgevenseml(String ugevenseml) {
	this.ugevenseml = ugevenseml;
}

public String getUgevensemt() {
	return ugevensemt;
}

public void setUgevensemt(String ugevensemt) {
	this.ugevensemt = ugevensemt;
}

public String getUgevensemp() {
	return ugevensemp;
}

public void setUgevensemp(String ugevensemp) {
	this.ugevensemp = ugevensemp;
}

public String getPgoddseml() {
	return pgoddseml;
}

public void setPgoddseml(String pgoddseml) {
	this.pgoddseml = pgoddseml;
}

public String getPgoddsemt() {
	return pgoddsemt;
}

public void setPgoddsemt(String pgoddsemt) {
	this.pgoddsemt = pgoddsemt;
}

public String getPgoddsemp() {
	return pgoddsemp;
}

public void setPgoddsemp(String pgoddsemp) {
	this.pgoddsemp = pgoddsemp;
}

public String getPgevenseml() {
	return pgevenseml;
}

public void setPgevenseml(String pgevenseml) {
	this.pgevenseml = pgevenseml;
}

public String getPgvensemt() {
	return pgvensemt;
}

public void setPgvensemt(String pgvensemt) {
	this.pgvensemt = pgvensemt;
}

public String getPgevensemp() {
	return pgevensemp;
}

public void setPgevensemp(String pgevensemp) {
	this.pgevensemp = pgevensemp;
}

public String getTwl() {
	return twl;
}

public void setTwl(String twl) {
	this.twl = twl;
}

public String getTwt() {
	return twt;
}

public void setTwt(String twt) {
	this.twt = twt;
}

public String getTwp() {
	return twp;
}

public void setTwp(String twp) {
	this.twp = twp;
}

public String getSem1() {
	return sem1;
}

public void setSem1(String sem1) {
	this.sem1 = sem1;
}

public String getSub1() {
	return sub1;
}

public void setSub1(String sub1) {
	this.sub1 = sub1;
}

public String getNoltar1() {
	return noltar1;
}

public void setNoltar1(String noltar1) {
	this.noltar1 = noltar1;
}

public String getNoltak1() {
	return noltak1;
}

public void setNoltak1(String noltak1) {
	this.noltak1 = noltak1;
}

public String getSem2() {
	return sem2;
}

public void setSem2(String sem2) {
	this.sem2 = sem2;
}

public String getSub2() {
	return sub2;
}

public void setSub2(String sub2) {
	this.sub2 = sub2;
}

public String getNoltar2() {
	return noltar2;
}

public void setNoltar2(String noltar2) {
	this.noltar2 = noltar2;
}

public String getNoltak2() {
	return noltak2;
}

public void setNoltak2(String noltak2) {
	this.noltak2 = noltak2;
}

public String getSem3() {
	return sem3;
}

public void setSem3(String sem3) {
	this.sem3 = sem3;
}

public String getSub3() {
	return sub3;
}

public void setSub3(String sub3) {
	this.sub3 = sub3;
}

public String getNoltar3() {
	return noltar3;
}

public void setNoltar3(String noltar3) {
	this.noltar3 = noltar3;
}

public String getNoltak3() {
	return noltak3;
}

public void setNoltak3(String noltak3) {
	this.noltak3 = noltak3;
}

public String getCsob() {
	return csob;
}

public void setCsob(String csob) {
	this.csob = csob;
}

public String getCstt() {
	return cstt;
}

public void setCstt(String cstt) {
	this.cstt = cstt;
}

public String getCsdu() {
	return csdu;
}

public void setCsdu(String csdu) {
	this.csdu = csdu;
}

public String getCsgrade() {
	return csgrade;
}

public void setCsgrade(String csgrade) {
	this.csgrade = csgrade;
}

public String getWob() {
	return wob;
}

public void setWob(String wob) {
	this.wob = wob;
}

public String getWtt() {
	return wtt;
}

public void setWtt(String wtt) {
	this.wtt = wtt;
}

public String getWdu() {
	return wdu;
}

public void setWdu(String wdu) {
	this.wdu = wdu;
}

public String getWgrade() {
	return wgrade;
}

public void setWgrade(String wgrade) {
	this.wgrade = wgrade;
}

public String getStob() {
	return stob;
}

public void setStob(String stob) {
	this.stob = stob;
}

public String getSttt() {
	return sttt;
}

public void setSttt(String sttt) {
	this.sttt = sttt;
}

public String getStdu() {
	return stdu;
}

public void setStdu(String stdu) {
	this.stdu = stdu;
}

public String getStgrade() {
	return stgrade;
}

public void setStgrade(String stgrade) {
	this.stgrade = stgrade;
}

public String getRpapers() {
	return rpapers;
}

public void setRpapers(String rpapers) {
	this.rpapers = rpapers;
}

public String getRprojects() {
	return rprojects;
}

public void setRprojects(String rprojects) {
	this.rprojects = rprojects;
}

public String getRgrants() {
	return rgrants;
}

public void setRgrants(String rgrants) {
	this.rgrants = rgrants;
}

public String getNor1() {
	return nor1;
}

public void setNor1(String nor1) {
	this.nor1 = nor1;
}

public String getNoi1() {
	return noi1;
}

public void setNoi1(String noi1) {
	this.noi1 = noi1;
}

public String getDes1() {
	return des1;
}

public void setDes1(String des1) {
	this.des1 = des1;
}

public String getDur1() {
	return dur1;
}

public void setDur1(String dur1) {
	this.dur1 = dur1;
}

public String getNor2() {
	return nor2;
}

public void setNor2(String nor2) {
	this.nor2 = nor2;
}

public String getNoi2() {
	return noi2;
}

public void setNoi2(String noi2) {
	this.noi2 = noi2;
}

public String getDes2() {
	return des2;
}

public void setDes2(String des2) {
	this.des2 = des2;
}

public String getDur2() {
	return dur2;
}

public void setDur2(String dur2) {
	this.dur2 = dur2;
}

public String getNor3() {
	return nor3;
}

public void setNor3(String nor3) {
	this.nor3 = nor3;
}

public String getNoi3() {
	return noi3;
}

public void setNoi3(String noi3) {
	this.noi3 = noi3;
}

public String getDes3() {
	return des3;
}

public void setDes3(String des3) {
	this.des3 = des3;
}

public String getDur3() {
	return dur3;
}

public void setDur3(String dur3) {
	this.dur3 = dur3;
}

public String getNor4() {
	return nor4;
}

public void setNor4(String nor4) {
	this.nor4 = nor4;
}

public String getNoi4() {
	return noi4;
}

public void setNoi4(String noi4) {
	this.noi4 = noi4;
}

public String getDes4() {
	return des4;
}

public void setDes4(String des4) {
	this.des4 = des4;
}

public String getDur4() {
	return dur4;
}

public void setDur4(String dur4) {
	this.dur4 = dur4;
}

public String getSpiti1() {
	return spiti1;
}

public void setSpiti1(String spiti1) {
	this.spiti1 = spiti1;
}

public String getSpiti2() {
	return spiti2;
}

public void setSpiti2(String spiti2) {
	this.spiti2 = spiti2;
}

public String getAictei1() {
	return aictei1;
}

public void setAictei1(String aictei1) {
	this.aictei1 = aictei1;
}

public String getAicte2() {
	return aicte2;
}

public void setAicte2(String aicte2) {
	this.aicte2 = aicte2;
}

public String getDte1() {
	return dte1;
}

public void setDte1(String dte1) {
	this.dte1 = dte1;
}

public String getDte2() {
	return dte2;
}

public void setDte2(String dte2) {
	this.dte2 = dte2;
}

public String getMum1() {
	return mum1;
}

public void setMum1(String mum1) {
	this.mum1 = mum1;
}

public String getMum2() {
	return mum2;
}

public void setMum2(String mum2) {
	this.mum2 = mum2;
}

public String getAny1() {
	return any1;
}

public void setAny1(String any1) {
	this.any1 = any1;
}

public String getAny2() {
	return any2;
}

public void setAny2(String any2) {
	this.any2 = any2;
}

public String getSemester1() {
	return semester1;
}

public void setSemester1(String semester1) {
	this.semester1 = semester1;
}

public String getSubject1() {
	return subject1;
}

public void setSubject1(String subject1) {
	this.subject1 = subject1;
}

public String getPf1() {
	return pf1;
}

public void setPf1(String pf1) {
	this.pf1 = pf1;
}

public String getCf1() {
	return cf1;
}

public void setCf1(String cf1) {
	this.cf1 = cf1;
}

public String getSemester2() {
	return semester2;
}

public void setSemester2(String semester2) {
	this.semester2 = semester2;
}

public String getSubject2() {
	return subject2;
}

public void setSubject2(String subject2) {
	this.subject2 = subject2;
}

public String getPf2() {
	return pf2;
}

public void setPf2(String pf2) {
	this.pf2 = pf2;
}

public String getSemester3() {
	return semester3;
}

public void setSemester3(String semester3) {
	this.semester3 = semester3;
}

public String getSubject3() {
	return subject3;
}

public void setSubject3(String subject3) {
	this.subject3 = subject3;
}

public String getPf3() {
	return pf3;
}

public void setPf3(String pf3) {
	this.pf3 = pf3;
}

public String getSemester4() {
	return semester4;
}

public void setSemester4(String semester4) {
	this.semester4 = semester4;
}

public String getSubject4() {
	return subject4;
}

public void setSubject4(String subject4) {
	this.subject4 = subject4;
}

public String getPf4() {
	return pf4;
}

public void setPf4(String pf4) {
	this.pf4 = pf4;
}

public String getSemester5() {
	return semester5;
}

public void setSemester5(String semester5) {
	this.semester5 = semester5;
}

public String getSubject5() {
	return subject5;
}

public void setSubject5(String subject5) {
	this.subject5 = subject5;
}

public String getPf5() {
	return pf5;
}

public void setPf5(String pf5) {
	this.pf5 = pf5;
}

public String getSemester6() {
	return semester6;
}

public void setSemester6(String semester6) {
	this.semester6 = semester6;
}

public String getSubject6() {
	return subject6;
}

public void setSubject6(String subject6) {
	this.subject6 = subject6;
}

public String getPf6() {
	return pf6;
}

public void setPf6(String pf6) {
	this.pf6 = pf6;
}

public String getSemester7() {
	return semester7;
}

public void setSemester7(String semester7) {
	this.semester7 = semester7;
}

public String getSubject7() {
	return subject7;
}

public void setSubject7(String subject7) {
	this.subject7 = subject7;
}

public String getPf7() {
	return pf7;
}

public void setPf7(String pf7) {
	this.pf7 = pf7;
}

public String getOddSem() {
	return oddSem;
}

public void setOddSem(String oddSem) {
	this.oddSem = oddSem;
}

public String getEvenSem() {
	return evenSem;
}

public void setEvenSem(String evenSem) {
	this.evenSem = evenSem;
}

public String getEvaluationTechniques() {
	return evaluationTechniques;
}

public void setEvaluationTechniques(String evaluationTechniques) {
	this.evaluationTechniques = evaluationTechniques;
}

public String getGoal1() {
	return goal1;
}

public void setGoal1(String goal1) {
	this.goal1 = goal1;
}

public String getGoal2() {
	return goal2;
}

public void setGoal2(String goal2) {
	this.goal2 = goal2;
}

public String getGoal3() {
	return goal3;
}

public void setGoal3(String goal3) {
	this.goal3 = goal3;
}

public String getDev1() {
	return dev1;
}

public void setDev1(String dev1) {
	this.dev1 = dev1;
}

public String getDev2() {
	return dev2;
}

public void setDev2(String dev2) {
	this.dev2 = dev2;
}

public String getAnyotherinformation() {
	return anyotherinformation;
}

public void setAnyotherinformation(String anyotherinformation) {
	this.anyotherinformation = anyotherinformation;
}

public String getDesignation() {
	return designation;
}

public void setDesignation(String designation) {
	this.designation = designation;
}

public String getDepartment() {
	return department;
}

public void setDepartment(String department) {
	this.department = department;
}



}
