const express = require('express');
const JSZip = require('jszip');
const fs = require('fs');
const app = express();
const port = 3000;
// const generate = require('./index2');
// Define a dynamic folder structure with subtopics
const folderStructure = {
	_id: '5d14b391429e7911c890ca4b',
	name: 'NEET',
	__v: 0,
	subjects: [
		{
			_id: '5d14b399429e7911c890ca4c',
			name: 'Physics',
			courseId: '5d14b391429e7911c890ca4b',
			__v: 0,
			topics: [
				{
					_id: '5d1a3b412eb0576e6b3a1996',
					name: 'Kinematics',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3b5b2eb0576e6b3a1999',
							name: 'Vectors',
							parentTopicId:
								'5d1a3b412eb0576e6b3a1996',
							__v: 0,
						},
						{
							_id: '5d1a3b532eb0576e6b3a1998',
							name: 'Motion in a Plane',
							parentTopicId:
								'5d1a3b412eb0576e6b3a1996',
							__v: 0,
						},
						{
							_id: '5d1a3b4a2eb0576e6b3a1997',
							name: 'Motion in a Straight Line',
							parentTopicId:
								'5d1a3b412eb0576e6b3a1996',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a3c27411b3e6e58d9f011',
					name: 'Properties of Bulk Matter',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3c2e411b3e6e58d9f012',
							name: 'Mechanical Properties of Solids',
							parentTopicId:
								'5d1a3c27411b3e6e58d9f011',
							__v: 0,
						},
						{
							_id: '5d1a3c36411b3e6e58d9f013',
							name: 'Mechanical Properties of Fluids',
							parentTopicId:
								'5d1a3c27411b3e6e58d9f011',
							__v: 0,
						},
						{
							_id: '5d1a3c3d411b3e6e58d9f014',
							name: 'Thermal Properties of Matter',
							parentTopicId:
								'5d1a3c27411b3e6e58d9f011',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a3c46411b3e6e58d9f015',
					name: 'Thermodynamics',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3edb411b3e6e58d9f01b',
					name: 'Electrostatics',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3f21411b3e6e58d9f01c',
							name: 'Electrostatic Potential and Capacitance',
							parentTopicId:
								'5d1a3edb411b3e6e58d9f01b',
							__v: 0,
						},
						{
							_id: '5d1a3f2e411b3e6e58d9f01d',
							name: 'Electric Charges and Fields',
							parentTopicId:
								'5d1a3edb411b3e6e58d9f01b',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a3f3d411b3e6e58d9f01e',
					name: 'Current Electricity',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a403c411b3e6e58d9f025',
					name: 'Electromagnetic Waves',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3b26411b3e6e58d9f00d',
					name: 'Physical World and Measurement',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3bba411b3e6e58d9f00e',
					name: 'Motion of System of Particles and Rigid Body',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3be4411b3e6e58d9f00f',
							name: 'System of Particles and Rotational Motion',
							parentTopicId:
								'5d1a3bba411b3e6e58d9f00e',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a3c6a411b3e6e58d9f016',
					name: 'Behaviour of Perfect Gas and Kinetic Theory',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3c79411b3e6e58d9f017',
							name: 'Kinetic Theory of Gases',
							parentTopicId:
								'5d1a3c6a411b3e6e58d9f016',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a3c80411b3e6e58d9f018',
					name: 'Oscillations and Waves',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3c95411b3e6e58d9f01a',
							name: 'Waves',
							parentTopicId:
								'5d1a3c80411b3e6e58d9f018',
							__v: 0,
						},
						{
							_id: '5d1a3c8b411b3e6e58d9f019',
							name: 'Oscillations',
							parentTopicId:
								'5d1a3c80411b3e6e58d9f018',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a404b411b3e6e58d9f026',
					name: 'Optics',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a40a4411b3e6e58d9f028',
							name: 'Wave Optics',
							parentTopicId:
								'5d1a404b411b3e6e58d9f026',
							__v: 0,
						},
						{
							_id: '5d1a4098411b3e6e58d9f027',
							name: 'Ray Optics and Optical Instruments',
							parentTopicId:
								'5d1a404b411b3e6e58d9f026',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a4153411b3e6e58d9f02f',
					name: 'Communication System',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3b632eb0576e6b3a199a',
					name: 'Laws of Motion',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3b6cdf0ded6e524791f1',
					name: 'Work, Energy and Power',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3bed411b3e6e58d9f010',
					name: 'Gravitation',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3fe2411b3e6e58d9f022',
					name: 'Electromagnetic Induction and Alternating Currents',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a4002411b3e6e58d9f024',
							name: 'Alternating Current',
							parentTopicId:
								'5d1a3fe2411b3e6e58d9f022',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a4120411b3e6e58d9f02d',
					name: 'Electronic Devices',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a3f4f411b3e6e58d9f01f',
					name: 'Magnetic Effects of Current and Magnetism',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a3fbc411b3e6e58d9f020',
							name: 'Moving Charges and Magnetism',
							parentTopicId:
								'5d1a3f4f411b3e6e58d9f01f',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1a40c7411b3e6e58d9f029',
					name: 'Dual Nature of Matter and Radiation',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1a40f1411b3e6e58d9f02a',
					name: 'Atoms and Nuclei',
					__v: 0,
					subTopics: [
						{
							_id: '5d1a40fe411b3e6e58d9f02b',
							name: 'Atoms',
							parentTopicId:
								'5d1a40f1411b3e6e58d9f02a',
							__v: 0,
						},
						{
							_id: '5d1a4114411b3e6e58d9f02c',
							name: 'Nuclei',
							parentTopicId:
								'5d1a40f1411b3e6e58d9f02a',
							__v: 0,
						},
					],
				},
				{
					_id: '5e25786ac3d282148d04eed9',
					name: 'Uncategorized',
					__v: 0,
					subTopics: [],
				},
			],
		},
		{
			_id: '5d14b39f429e7911c890ca4d',
			name: 'Chemistry',
			courseId: '5d14b391429e7911c890ca4b',
			__v: 0,
			topics: [
				{
					_id: '5d1f2b0ed118dc2f7fa1e9f6',
					name: 'Structure of Atom',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b05d118dc2f7fa1e9f5',
					name: 'Some Basic Concepts of Chemistry',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b17d118dc2f7fa1e9f7',
					name: 'Classification of Elements and Periodicity in Properties',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b4bd118dc2f7fa1e9f9',
					name: 'Thermodynamics',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b92fbd6bf2f3e097744',
					name: 'Organic Chemistry- Some Basic Principles and Techniques',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f2b9f21dd212f380e2aca',
							name: 'Principles of Qualitative Analysis',
							parentTopicId:
								'5d1f2b92fbd6bf2f3e097744',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f2d51d118dc2f7fa1e9ff',
					name: 'Solid State',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e4721dd212f380e2ad1',
					name: 'General Principles and Processes of Isolation of Elements',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e6d21dd212f380e2ad4',
					name: 'Alcohols, Phenols and Ethers',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b5afbd6bf2f3e097742',
					name: 'Redox Reactions',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2ba7d118dc2f7fa1e9fc',
					name: 'Hydrocarbons',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f2bc3d118dc2f7fa1e9fd',
							name: 'Aromatic Hydrocarbons',
							parentTopicId:
								'5d1f2ba7d118dc2f7fa1e9fc',
							__v: 0,
						},
						{
							_id: '5d1f2bbd21dd212f380e2acc',
							name: 'Alkynes',
							parentTopicId:
								'5d1f2ba7d118dc2f7fa1e9fc',
							__v: 0,
						},
						{
							_id: '5e257936c3d282148d04eedc',
							name: 'Purification and Characterisation of Organic Compounds',
							parentTopicId:
								'5d1f2ba7d118dc2f7fa1e9fc',
							__v: 0,
						},
						{
							_id: '5d1f2bb0fbd6bf2f3e097745',
							name: 'Alkanes',
							parentTopicId:
								'5d1f2ba7d118dc2f7fa1e9fc',
							__v: 0,
						},
						{
							_id: '5d1f2bb721dd212f380e2acb',
							name: 'Alkenes',
							parentTopicId:
								'5d1f2ba7d118dc2f7fa1e9fc',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f2d64d118dc2f7fa1ea00',
					name: 'Electrochemistry',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e5621dd212f380e2ad3',
					name: 'd and f Block Elements',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e5dfbd6bf2f3e097756',
					name: 'Coordination Compounds',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e7ffbd6bf2f3e09775f',
					name: 'Organic Compounds Containing Nitrogen',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f2e8afbd6bf2f3e097763',
							name: 'Amines',
							parentTopicId:
								'5d1f2e7ffbd6bf2f3e09775f',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f2e64d118dc2f7fa1ea01',
					name: 'Haloalkanes and Haloarenes',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e90fbd6bf2f3e097764',
					name: 'Biomolecules',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e98d118dc2f7fa1ea02',
					name: 'Polymers',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b20d118dc2f7fa1e9f8',
					name: 'Chemical Bonding and Molecular Structure',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b55fbd6bf2f3e097741',
					name: 'Equilibrium',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2d5bfbd6bf2f3e097746',
					name: 'Solutions',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e4e21dd212f380e2ad2',
					name: 'p-Block Elements',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5e257874c3d282148d04eeda',
					name: 'Uncategorized',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b63d118dc2f7fa1e9fa',
					name: 'Hydrogen',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b4121dd212f380e2ac9',
					name: 'States of Matter: Gases and Liquids',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b81fbd6bf2f3e097743',
					name: 's-Block Element (Alkali and Alkaline earth metals)',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2b8ad118dc2f7fa1e9fb',
					name: 'Some p-Block Elements',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2d6afbd6bf2f3e097747',
					name: 'Chemical Kinetics',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2bee21dd212f380e2acd',
					name: 'Environmental Chemistry',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2d71fbd6bf2f3e097748',
					name: 'Surface Chemistry',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e78fbd6bf2f3e09775c',
					name: 'Aldehydes, Ketones and Carboxylic Acids',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f2e9dd118dc2f7fa1ea03',
					name: 'Chemistry in Everyday Life',
					__v: 0,
					subTopics: [],
				},
			],
		},
		{
			_id: '5d14b3a6429e7911c890ca4e',
			name: 'Biology',
			courseId: '5d14b391429e7911c890ca4b',
			__v: 0,
			topics: [
				{
					_id: '5d1f2fe9d118dc2f7fa1ea08',
					name: 'Structural Organization in Animals and Plants',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f3000d118dc2f7fa1ea0a',
							name: 'Anatomy of Flowering plants',
							parentTopicId:
								'5d1f2fe9d118dc2f7fa1ea08',
							__v: 0,
						},
						{
							_id: '5d1f2ffafbd6bf2f3e097767',
							name: 'Morphology of Flowering Plants (Plant Morphology)',
							parentTopicId:
								'5d1f2fe9d118dc2f7fa1ea08',
							__v: 0,
						},
						{
							_id: '5d1f301421dd212f380e2ad8',
							name: 'Structural Organisation in Animals (Animal Tissues)',
							parentTopicId:
								'5d1f2fe9d118dc2f7fa1ea08',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f308ed118dc2f7fa1ea0f',
					name: 'Human Physiology',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f309cfbd6bf2f3e09776d',
							name: 'Digestion and Absorption',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
						{
							_id: '5d1f30c7d118dc2f7fa1ea10',
							name: 'Chemical Coordination and Integration',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
						{
							_id: '5d1f30a3fbd6bf2f3e09776e',
							name: 'Breathing and Respiration',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
						{
							_id: '5d1f30be21dd212f380e2ade',
							name: 'Neural Control and Coordination',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
						{
							_id: '5d1f30b0fbd6bf2f3e097770',
							name: 'Excretory System',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
						{
							_id: '5d1f30b621dd212f380e2add',
							name: 'Locomotion and Movement',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
						{
							_id: '5d1f30aafbd6bf2f3e09776f',
							name: 'Body Fluids and Circulation',
							parentTopicId:
								'5d1f308ed118dc2f7fa1ea0f',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f399121dd212f380e2ae8',
					name: 'Biology and Human Welfare',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f39a5fbd6bf2f3e097778',
							name: 'Strategies for Enhancement in Food Production',
							parentTopicId:
								'5d1f399121dd212f380e2ae8',
							__v: 0,
						},
						{
							_id: '5d1f39acfbd6bf2f3e097779',
							name: 'Microbes in Human Welfare',
							parentTopicId:
								'5d1f399121dd212f380e2ae8',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f39be21dd212f380e2ae9',
					name: 'Biotechnology - Principles and Applications',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f39d0fbd6bf2f3e09777a',
							name: 'Applications of Biotechnology',
							parentTopicId:
								'5d1f39be21dd212f380e2ae9',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f39dffbd6bf2f3e09777b',
					name: 'Ecology and Environment',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f39ea21dd212f380e2aee',
							name: 'Organisms and Environment',
							parentTopicId:
								'5d1f39dffbd6bf2f3e09777b',
							__v: 0,
						},
						{
							_id: '5d1f3a02fbd6bf2f3e09777c',
							name: 'Biodiversity and Conservation',
							parentTopicId:
								'5d1f39dffbd6bf2f3e09777b',
							__v: 0,
						},
						{
							_id: '5d1f39f2d118dc2f7fa1ea19',
							name: 'Ecosystem',
							parentTopicId:
								'5d1f39dffbd6bf2f3e09777b',
							__v: 0,
						},
					],
				},
				{
					_id: '5d565f7199c62a50ed6500c9',
					name: 'Diversity in Living World',
					__v: 0,
					subTopics: [
						{
							_id: '5d565f7299c62a50ed6500cc',
							name: 'Plant Kingdom',
							parentTopicId:
								'5d565f7199c62a50ed6500c9',
							__v: 0,
						},
						{
							_id: '5d565f7199c62a50ed6500ca',
							name: 'The Living World',
							parentTopicId:
								'5d565f7199c62a50ed6500c9',
							__v: 0,
						},
						{
							_id: '5d565f7199c62a50ed6500cb',
							name: 'Biological Classification',
							parentTopicId:
								'5d565f7199c62a50ed6500c9',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f301cd118dc2f7fa1ea0b',
					name: 'Cell Structure and Function',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f303efbd6bf2f3e09776a',
							name: 'Biomolecules',
							parentTopicId:
								'5d1f301cd118dc2f7fa1ea0b',
							__v: 0,
						},
						{
							_id: '5d1f304b21dd212f380e2ada',
							name: 'Enzymes',
							parentTopicId:
								'5d1f301cd118dc2f7fa1ea0b',
							__v: 0,
						},
						{
							_id: '5d1f3037fbd6bf2f3e097769',
							name: 'Cell- The Basic Unit of Life',
							parentTopicId:
								'5d1f301cd118dc2f7fa1ea0b',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f3389fbd6bf2f3e097772',
					name: 'Reproduction',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f339521dd212f380e2ae1',
							name: 'Reproduction in Organisms',
							parentTopicId:
								'5d1f3389fbd6bf2f3e097772',
							__v: 0,
						},
						{
							_id: '5d1f339c21dd212f380e2ae2',
							name: 'Sexual Reproduction in Flowering Plants',
							parentTopicId:
								'5d1f3389fbd6bf2f3e097772',
							__v: 0,
						},
					],
				},
				{
					_id: '5e25787ec3d282148d04eedb',
					name: 'Uncategorized',
					__v: 0,
					subTopics: [],
				},
				{
					_id: '5d1f3057d118dc2f7fa1ea0d',
					name: 'Plant Physiology',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f306021dd212f380e2adb',
							name: 'Transport in Plants',
							parentTopicId:
								'5d1f3057d118dc2f7fa1ea0d',
							__v: 0,
						},
						{
							_id: '5d1f3086fbd6bf2f3e09776c',
							name: 'Plant Growth and Development',
							parentTopicId:
								'5d1f3057d118dc2f7fa1ea0d',
							__v: 0,
						},
					],
				},
				{
					_id: '5d1f33b3fbd6bf2f3e097774',
					name: 'Genetics and Evolution',
					__v: 0,
					subTopics: [
						{
							_id: '5d1f398a21dd212f380e2ae7',
							name: 'Evolution',
							parentTopicId:
								'5d1f33b3fbd6bf2f3e097774',
							__v: 0,
						},
					],
				},
			],
		},
	],
};

const createFoldersAndFiles = (zip, structure, folderName = '') => {
	for (const subfolderName in structure) {
		const currentFolderName = `${folderName}/${subfolderName}`;
		const substructure = structure[subfolderName];

		if (Object.keys(substructure).length > 0) {
			const folder = zip.folder(currentFolderName);
			createFoldersAndFiles(
				folder,
				substructure,
				currentFolderName,
			);
		} else {
			// Create a dummy text file in the folder
			zip.file(`${currentFolderName}/Hello.txt`, 'Hello World');
		}
	}
};

app.get('/generate-zip', async (req, res) => {
	try {
		// Initialise the zip file
		const zip = new JSZip();

		// Create folders and files based on the dynamic structure
		createFoldersAndFiles(zip, folderStructure);

		// Convert the zip file into a buffer
		const content = await zip.generateAsync({ type: 'nodebuffer' });

		// Set a custom name for the downloaded zip file
		const customFilename = 'my-custom-filename.zip';

		// Set response headers for the zip file download with the custom filename
		res.setHeader('Content-Type', 'application/zip');
		res.setHeader(
			'Content-Disposition',
			`attachment; filename=${customFilename}`,
		);

		// Send the zip file as the response
		res.send(content);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).send('Internal Server Error');
	}
});
// app.get('/generate-pdf', generate.Topdf);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
