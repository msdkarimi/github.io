
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
    {'degreeName' : 'B.Sc. in Computer Engineering - Software Engineering',
        'degreeLocation' : 'at Persian Gulf University, Iran'
    },

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
            'PyTorch, TensorFlow, Jax, LangGraph, LangChain',
            'Spark, Hadoop, Pandas, NumPy, Scikit-learn, Matplotlib',
            'PostgreSQL, SQLAlchemy (ORM), MongoDB, Node.js, fastAPI',
            'Linux, Bash, SLURM, HPC clusters'
        ]
    }
]

export const description = [
    "Applied AI Researcher specializing in generative vision models, prompt-based image synthesis,\
     and segmentation. Experienced in generating semantic masks from model's internal representation (attention modules), creating synthetic datasets,\
      and using VLMs for captioning. Skilled in OOD detection, weakly supervised segmentation, and domain adaptation\
       via efficient fine-tuning. Applied curriculum learning and custom sampling to address class imbalance in classification.",
    "Developed privacy-preserving, stateful autonomous agents with LangGraph/LangChain and Ollama, featuring tool-calling, long-term memory,\
     chain-of-thought reasoning, and full-stack deployment.",
]

export const workExperiences = [
    {
        'title':"Applied AI Researcher, DARE Project",
        'company': 'Politecnico di Torino',
        'location': 'Turin, Italy',
        'date': 'Jun 2024 - Sep 2025',
        'github': [
            {'name':'Difussion model', 'link':'https://github.com/msdkarimi/pl_ldm'},
            {'name':'WSSS model', 'link':'https://github.com/msdkarimi/wsss'},
            {'name':'OOD model', 'link':'https://github.com/msdkarimi/clean_pipeline'}
        ],
        'stack':['PyTorch', 'Torchvision', 'Python', 'VLM(Gemma-3)', 'DDPM', 'DDIM', 'VAE', 'OpenCV', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Grad-CAM',  'W&B','Spark', 'HPC', 'Multi-GPU programming', 'Mixed-precision modeling', 'Gradient checkpointing'],
        'achievements': [
            'Developed a prompt-driven high resolution synthetic image–mask dataset by training a guided latent diffusion model\
             combining a Variational Autoencoder (VAE) with a Denoising Diffusion Probabilistic Model (DDPM).\
              Leveraged DDIM sampling for accelerated inference and employed classifier-free guidance to enhance the fidelity and alignment of\
               image–mask pairs with textual prompts. resulting in improved IoU scores across various object categories, with performance gains varying by class — reaching up to 10% in certain cases.',
            
            'Trained a supervised contrastive learning model for out-of-distribution (OOD) detection, reaching 92% F1 score, and used it to clean image pools, inorder to enhancing downstream task accuracy.',
            'Designing data augmentation pipeline by leveraging semantic search within the embedding space of\
             an OOD model to retrieve similar samples from unlabeled data, thereby expanding\
              the training dataset for improved generative model performance.',
            'Used Explainable AI (XAI) for pseudo-mask generation in weakly supervised segmentation,\
             combining prototype learning and an affinity network to improve localization and segmentation accuracy. Leading to more reliable pseudo-labels and improved performance in low-annotation segmentation scenarios.',
            
        ],
    },
    {
        'title':"ML Engineer, DIVINE Project",
        'company': 'Politecnico di Torino',
        'location': 'Turin, Italy',
        'date': 'Jun. 2025 - Aug 2025',
        'github': [],
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
        'github': [],
        'stack':['PyTorch', 'Torchvision', 'Python', 'Stable Diffusion', 'SAM', 'TensorBoard'],
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
    // {
    //     'title':"",
    //     'company': 'Politecnico di Torino',
    //     'location': 'Turin, Italy',
    //     'github': [{'name':'', 'link':''}],
    //     'stack':[],
    //     'achievements': [
             
    //     ],
    // },


]

export const projects = [
    {
        'title':"Intelligent Ticket Resolution Agent with Tool Calling (ReAct-based)",
        'company': '',
        'location': '',
        'date': '',
        'github': [{'name':'Repository', 'link':'https://github.com/msdkarimi/automation_agents'}],
        'stack':['Python', 'LangGraph', 'LangChain', 'Ollama', 'LLM', 'ReAct agent', 'Chain of Thought', 'Few-Shot Prompting', 'Tool Calling', 'React', 'fastAPI', 'JavaScript', 'SQLAlchemy', ],
        'achievements': [
             "Developed an intelligent ticket resolution agent using LangGraph and LangChain,\
              designed with the ReAct (Reasoning and Acting) paradigm to enable advanced reasoning\
               and dynamic tool-calling capabilities.",
            "Implemented both episodic and instructional memory using custom memory components for\
             better contextual understanding and continuity.",
            "Employed Chain of Thought prompting and Few-Shot examples to enhance reasoning\
             accuracy and improve task-specific performance.",
            "Used Ollama to run the language model locally, ensuring data privacy and secure processing.",
            "Built a React.js-based frontend leveraging React hooks for efficient state management\
             and dynamic visualization of agent responses to enhance user interaction.",
            "Developed the backend using FastAPI, ensuring high performance and easy API integration.",
            "Utilized PostgreSQL as the primary database, with SQLAlchemy ORM for efficient and structured database interactions.",
        ],
    },

    {
        'title':"Detection of Anomalous Behaviour in Industrial Robot",
        'company': 'Coursework: AI in application',
        'location': ' ',
        'github': [{'name':'Repository', 'link':'https://github.com/msdkarimi/ML-in-application'}],
        'stack':['Python', 'PyTorch',  'Adversarial Training', 'NumPy',  'Pandas',  'Matplotlib',  'TensorBoard',],
        'achievements': [
            "Train a deep autoencoder to reconstruct normal time series data with minimal reconstruction error.\
              Incorporate a discriminator network within an adversarial training framework, where the discriminator\
               acts as a regularizer by distinguishing between real (original) and reconstructed sequences. ",
            "Apply R1 regularization to the discriminator's gradients to mitigate overfitting and promote\
             better generalization across unseen data distributions. ",
        ],
    },
    {
        'title':"Sim-to-Real transfer of RL policies in robotics",
        'company': 'Coursework: Advanced ML',
        'location': ' ',
        'github': [{'name':'Repository', 'link':'https://github.com/msdkarimi/AdvancedML'}],
        'stack':['Python', 'PyTorch', 'Torchvision', 'CNN', 'Stable-Baselines3', 'MuJoCo', 'OpenCV'],
        'achievements': [
            "Develop a reinforcement learning pipeline by employing a third-party library to train an agent, using Domain Randomization\
             to learn robust policies that transfer well to the target domain, using CNNs to train control policies from\
              visual input, enabling robots to autonomously interact with the environment through raw images of environment.",
            "For simulation Gym environment is used to model the robot, MuJoCo is used as underlying physics engine."
        ],
    },
    // {
    //     'title':"",
    //     'company': 'Politecnico di Torino',
    //     'location': 'Turin, Italy',
    //     'github': [{'name':'', 'link':''}],
    //     'stack':[],
    //     'achievements': [
             
    //     ],
    // },

]

