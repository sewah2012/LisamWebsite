import './Study.css';
import React from 'react'
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Header/Footer/Footer';
import Banner from '../../Components/Header/Banner/Banner';

const Study = () => {
	return (
		<div className='study'>
			<Header />
			<Banner title='STUDY IN MOROCCO' image='/assets/imgs/maroc.jpg' />
			<div className='study__content'>
				<img src='/assets/imgs/study.jpg' alt='study in Morocco' />
				<div className='study__content-info'>
					<h4>Why Would You Study in Morocco?</h4>
					<p>
						Whether you want to study a course in the field of Science and Engineering studies or Medecine or Architecture in Morocco,
						there are various and interesting number of options for programs and cities to choose from, including Rabat, Marrakesh, Tangiers, and Fez.

						If you are thinking about your study in Morocco as an interactive textbook, you will find that this country features numerous influences including Berber, Jewish, Arabic, French, and Spanish legacies.
				</p>

					<h4>Benefits of Studying in Morocco</h4>
					<p>
						Morocco is one of the most stable countries in the region. It has a constitutional royal system and popularly-elected parliament.
						Morocco is a great starting point to build relations between cultures and understand the Islamic world deeply.
						There are many places to study in Morocco, especially in the major cities.
				</p>

					<h4>Higher Education in Morocco</h4>
					<p>
						Morocco is home to around 14 universities, in addition to other technical institutes.
						Most of the courses are in French. You can also find courses in English.
						Studies are based on the bachelor, master, and PhD degrees system. The academic year consists of two semesters.
						Many programs accept a large number of foreign and exchange students.
				</p>

					<h4>Enrollment Procedures in the Moroccan Universities</h4>
					<p>
						To enroll in most of the public higher education institutions in Morocco,
						you have to pass through the diplomatic channel of your country,
						which will help you with your request. After that,
						your request will be sent to the International Cooperation Moroccan Agency.
				</p>

					<p>All applications for the Morocco - Liberia Bilateral Scholarship program are processed by the
					<a href="http://moe-liberia.org/" target='_blank' rel='noreferrer' > Ministry of Education of the Republic of Liberia</a>.<br /> <br />
						<span>Note: THE <a href="http://moe-liberia.org/" target='_blank' rel='noreferrer'>Ministry of Education </a> is the only authorized institution to process scholarship application for the Kingdom of Morocco.</span>
					</p>

					<h4>Requirements</h4>
					<p>
						Foreign students who wish to join a Moroccan university are required to have a baccalauréat certificate or equivalent at the university entry year.
					Also, the master students are required to have a bachelor’s degree. <br /> <br />

					Moreover, you have to hold a master’s degree to be able to join a PhD program. You should also determine the selected university and the sector.
					Most of the university programs are in French
				</p>

					<h4>FOR MORE INFORMATION</h4>
					<p>Please contact the following persons for more informaton: </p><br /> <br />

					<p>
						<b>Mr.Theophilus Snorton</b><br />
						<b>Tel.: +231 770 432 523 </b>
					</p> <br />

					<hr /> <br />
					<p>
						<b>Mr. Momoh Sheriff</b><br />
						<b>Tel.: +212 663 277 078 </b>
					</p> <br />

					

				</div>





			</div>
			<Footer />
		</div>
	)
}

export default Study
