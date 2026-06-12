export interface Learning {
	title: string;
	message: string;
}

export const learnings: Learning[] = [
	{ title: 'Geef ruimte aan minderheidsstemmen', message: 'Vraag expliciet naar afwijkende geluiden' },
	{ title: 'Maak alle stemmen zichtbaar', message: 'Stimuleer om eerlijk standpunten en gevoelens te delen, zodat verborgen meningen boven tafel komen. Dit voorkomt onderstroom-problemen' },
	{ title: 'Zoek het `niet-gehoorde` op', message: 'Vraag “Is er iemand die er anders over denkt?” of “Zijn er zorgen die nog niet gedeeld zijn?”' },
	{ title: 'Onder stress komen jouw valkuilen naar boven', message: 'Valkuilen zijn gescript gedrag, ontwikkeld tussen 4 en 18 jaar' },
	{ title: 'Herken je belemmerende overtuigingen', message: 'Na een `Activating Event` (wat was de situatie?), beinvloeden je overtuigingen (Beliefs) de uitkomst van de situatie (Consequences). Welke beliefs helpen je niet?' },
	{ title: 'Coach met GROW en open vragen', message: 'Goal (wat wil je?), Reality (wat is de huidige situatie?), Options (wat zijn de mogelijkheden?), Will (wat ga je concreet doen?)' },
	{ title: 'Wees concreet in oplossingen', message: 'Er is geen wij in een jij-probleem, wat ga jij doen om het op te lossen?' },
	{ title: 'Erken overtuigingen van de ander', message: 'Erken de overtuigingen van de ander, ook als je het er niet mee eens bent' },
	{ title: 'Feedback regel 1', message: 'Hou het feitelijk en rond af met `herken je dat?`' },
	{ title: 'Feedback regel 2', message: 'Benoem het effect van het gedrag (op jou, het project, het team) en sluit daarna af met `Kun je dat begrijpen?`' },
	{ title: 'Feedback regel 3', message: 'Werk toe naar een oplossing door te vragen wat de ander concreet anders zou kunnen doen' },
	{ title: 'Feedback regel 4', message: 'Vraag nooit `waarom..`, maar `wat maakt..` of `hoe komt het dat..`' },
	{ title: 'Faciliteren is het bieden van een podium', message: 'Faciliteren betekent begeleiden zonder te sturen of te helpen' },
	{ title: 'Situationeel leiderschap S1', message: 'Weinig Ervaring = Veel sturing, weinig ondersteuning (Instrueren)' },
	{ title: 'Situationeel leiderschap S2', message: 'Enige Ervaring = Veel sturing en veel ondersteuning (Begeleiden)' },
	{ title: 'Situationeel leiderschap S3', message: 'Ervaren = Weinig sturing, veel ondersteuning (Overleggen)' },
	{ title: 'Situationeel leiderschap S4', message: 'Zeer ervaren = Weinig sturing, weinig ondersteuning (Delegeren)' },
];

let lastLearningIndex = -1;

export function getRandomLearning(): Learning {
	let randomIndex: number;
	do {
		randomIndex = Math.floor(Math.random() * learnings.length);
	} while (randomIndex === lastLearningIndex && learnings.length > 1);

	lastLearningIndex = randomIndex;
	return learnings[randomIndex];
}
