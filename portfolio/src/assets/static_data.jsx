
export const head_line = {
     'fullName' : 'Masoud Karimi',
     'title' : 'Applied AI Engineer (Computer Vision & Agentic Systems)',
     'email' : 'itsmasoudkarimi@gmail.com',
     'location' : 'Turin, Italy',

}

export const degrees = [
    {'degreeName' : 'M.Sc. in Computer Engineering - AI & Data Analytics',
     'degreeLocation' : 'at Politecnico di Torino, Italy'
    },
    // {'degreeName' : 'B.Sc. in Computer Engineering - Software Engineering',
    //     'degreeLocation' : 'at Persian Gulf University, Iran'
    // },

]

export const languages = [
    {
        'language': 'Persian',
        'level': 'Native'
    },
    {
        'language': 'English',
        'level': 'Professional'
    },
    {
        'language': 'Italian',
        'level': 'Intermediate'
    }
]

export const referee = [
    {
        'name': 'Andrea Bottino',
        'title': 'Associate Proffesor',
        'at': 'Politecnico di Torino',
        'email': 'andrea.bottino@polito.it'
    },
]

export const technicalSkils = [
    {   'title': 'Machine Learning | Deep Learning',
        'sub':[
            'Synthetic Data Generation using Diffusion Models',
            'Out-of-Distribution (OOD) Detection',
            'Semantic Segmentation (Supervised, Weakly Supervised)',
            'Explainable AI (XAI)',
            'Curriculum learning',
            'Image Classification (multi-class, multi-label)',
            'Model Adaptation: Parameter-efficient fine-tuning (e.g., Adapters, LoRA)',
        ]
    },
    {
        'title': 'Agentic AI & Autonomous Systems',
        'sub': [
            'Stateful agents with episodic and instructional memory for long-term context retention',
            'ReAct-based agents with tool-calling capabilities',
            'Chain-of-Thought and few-shot prompting.',
            'Deployed LLMs locally via Ollama',
        ]

    },
    {
        'title': 'Frameworks | Tools',
        'sub': [
            'Python, C, Java, JavaScript, React',
            'PyTorch, TensorFlow, Jax, LangGraph and LangChain',
            'Spark, Hadoop, Pandas, NumPy, Scikit-learn, Matplotlib',
            'PostgreSQL, SQLAlchemy (ORM), MongoDB, Node.js, fastAPI',
            'Linux, Bash, SLURM, HPC clusters'
        ]
    }
]

export const description = [
    'Applied AI Researcher with expertise in generative vision models, prompt-based image synthesis, and segmentation. Experienced in generating semantic masks from internal model representations (cross/self-attention), creating synthetic segmentation datasets, and leveraging VLMs for automatic caption generation. Skilled in OOD detection using supervised contrastive learning, weakly supervised segmentation via class activation maps, and domain adaptation through parameter-efficient fine-tuning of panoptic segmentation models. Applied curriculum learning and custom batch sampling to handle class imbalance in classification tasks.',
    'Additionally, developed privacy-preserving, stateful autonomous agents using LangGraph/LangChain and Ollama, with tool-calling, long-term memory, chain-of-thought reasoning, and full-stack deployment capabilities.',
]

export const projects = [
    {
        'title':"Applied AI Researcher, DARE Project",
        'company': 'Politecnico di Torino',
        'location': 'Turin, Italy',
        'date': 'Jun 2024 - Oct. 2025',
        'github': 'https://github.com/msdkarimi/automation_agents',
        'stack':['PyTorch', 'Torchvision', 'Python', 'DDPM', 'DDIM', 'OpenCV', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Grad-CAM',  'W&B','Spark', 'HPC', 'Multi-GPU programming', 'Mixed-precision modeling', 'Gradient checkpointing'],
        'achievements': [
            'Developed a prompt-driven high resolution synthetic image–mask dataset by training a guided latent diffusion model\
             combining a Variational Autoencoder (VAE) with a Denoising Diffusion Probabilistic Model (DDPM).\
              Leveraged DDIM sampling for accelerated inference and employed classifier-free guidance to enhance the fidelity and alignment of\
               image–mask pairs with textual prompts. resulting in improved IoU scores across various object categories, with performance gains varying by class — reaching up to 10% in certain cases.',
            
            'Trained a supervised contrastive learning model for out-of-distribution (OOD) detection, reaching 92% F1 score, and used it to clean image pools, inorder to enhancing downstream task accuracy.',
            'Used Explainable AI (XAI) for pseudo-mask generation in weakly supervised segmentation,\
             combining prototype learning and an affinity network to improve localization and segmentation accuracy. Leading to more reliable pseudo-labels and improved performance in low-annotation segmentation scenarios.',
            
        ],
    },
    {
        'title':"ML Engineer, DIVINE Project",
        'company': 'Politecnico di Torino',
        'location': 'Turin, Italy',
        'date': 'Jun. 2025 - Aug 2025',
        'github': 'https://github.com/msdkarimi/automation_agents',
        'stack':['PyTorch', 'Torchvision', 'Python', 'Open-cv', 'Pandas', 'Numpy', 'TensorBoard' ],
        'achievements': [
            'Implemented a Query2Label (Q2L)-based transformer architecture for multi-label image classification,\
            leveraging set-based prediction to capture inter-label dependencies and contextual relationships in complex image datasets.',

            'Addressed extreme class imbalance using a custom curriculum learning strategy,\
            progressively increasing training difficulty by reorganizing data sampling based on label frequency and model confidence.',
            
        ],
    },

    {
        'title':"Graduate Researcher",
        'company': 'Politecnico di Torino',
        'location': 'Turin, Italy',
        'date': 'Oct. 2023 - Jun 2024',
        'github': '',
        'stack':[],
        'achievements': [
            'Designed and implemented parameter-efficient adaptor modules to facilitate domain adaptation\
             in vision segmentation tasks, targeting real-world distribution shift.',
            'Leveraged powerful foundational segmentation models such as Segment Anything Model\
             (SAM) and SEEM, integrating adaptors in a plug-and-play fashion to preserve generalization\
              capabilities while enabling domain-specific learning.',
            'Performed extensive ablation studies to identify optimal adaptor configurations\
             and insertion points, analyzing trade-offs between parameter efficiency\
              and task-specific performance across multiple domains.',
            'Generated task-specific images and leveraged Stable Diffusion’s internal\
             attention maps (cross-/self-attention) to extract prompt-guided class masks,\
              enabling weakly supervised segmentation without fine-tuning.',


             
        ],
    },
    {
        'title':"",
        'company': 'Politecnico di Torino',
        'location': 'Turin, Italy',
        'github': '',
        'stack':[],
        'achievements': [
             
        ],
    },

]

