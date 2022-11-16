#!/usr/bin/env node

'use strict';

const boxen = require('boxen');
const chalk = require('chalk');
const inquirer = require('inquirer');
const clear = require('clear');
const open = require('open');
// const fs = require('fs');
// const request = require('request');
// const path = require('path');
// const ora = require('ora');
// const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
	{
		type: 'list',
		name: 'action',
		message: 'What you want to do?',
		choices: [
			{
				name: `Send me an ${chalk.green.bold('email')}?`,
				value: () => {
					open('mailto:contact@julioespadas.com');
					console.log('\nDone, see you soon at inbox.\n');
				},
			},
			// {
			// 	name: `Download my ${chalk.magentaBright.bold('Resume')}?`,
			// 	value: () => {
			// 		// cliSpinners.dots;
			// 		const loader = ora({
			// 			text: ' Downloading Resume',
			// 			spinner: cliSpinners.material,
			// 		}).start();
			// 		let pipe = request('https://anmolsingh.me/api/resume').pipe(
			// 			fs.createWriteStream('./anmol-resume.html')
			// 		);
			// 		pipe.on('finish', function () {
			// 			let downloadPath = path.join(process.cwd(), 'anmol-resume.html');
			// 			console.log(`\nResume Downloaded at ${downloadPath} \n`);
			// 			open(downloadPath);
			// 			loader.stop();
			// 		});
			// 	},
			// },
			{
				name: `Schedule a ${chalk.redBright.bold('Meeting')}?`,
				value: () => {
					open('https://calendly.com/julio-espadas/30min');
					console.log('\n See you at the meeting \n');
				},
			},
			{
				name: 'Just quit.',
				value: () => {
					console.log('Hasta la vista.\n');
				},
			},
		],
	},
];

const data = {
	name: chalk.bold.green('             Julio Espadas'),
	handle: chalk.white('@jespadas'),
	work: `${chalk.white('Application Consultant at')} ${chalk
		.hex('#2b82b2')
		.bold('Capgemini Group')}`,
	// twitter: chalk.gray('https://twitter.com/') + chalk.cyan('misteranmol'),
	github: chalk.gray('https://github.com/') + chalk.green('jespadas'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('julioespadas'),
	web: chalk.cyan('https://julioespadas.com'),
	npx: chalk.red('npx') + ' ' + chalk.white('jespadas'),

	labelWork: chalk.white.bold('       Work:'),
	// labelTwitter: chalk.white.bold('    Twitter:'),
	labelGitHub: chalk.white.bold('     GitHub:'),
	labelLinkedIn: chalk.white.bold('   LinkedIn:'),
	labelWeb: chalk.white.bold('        Web:'),
	labelCard: chalk.white.bold('       Card:'),
};

const me = boxen(
	[
		`${data.name}`,
		``,
		`${data.labelWork}  ${data.work}`,
		``,
		`${data.labelTwitter}  ${data.twitter}`,
		`${data.labelGitHub}  ${data.github}`,
		`${data.labelLinkedIn}  ${data.linkedin}`,
		`${data.labelWeb}  ${data.web}`,
		``,
		`${data.labelCard}  ${data.npx}`,
		``,
		`${chalk.italic(
			'I have a degree in marketing and three years of experience as a project manager.'
		)}`,
		`${chalk.italic(
			'My willingness to continue learning allowed me to obtain a second degree in application development with which I have three years of experience.'
		)}`,
		`${chalk.italic(
			'The experience of working internationally with multicultural teams and in other languages allows me to adapt quickly to the project I am involved in.'
		)}`,
		`${chalk.italic('I am bilingual in French, English and Spanish.')}`,
	].join('\n'),
	{
		margin: 1,
		float: 'center',
		padding: 1,
		borderStyle: 'single',
		borderColor: 'green',
	}
);

console.log(me);
const tip = [
	`Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
	'',
].join('\n');
console.log(tip);

prompt(questions).then((answer) => answer.action());
