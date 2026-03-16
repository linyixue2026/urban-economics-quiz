/**
 * Quiz System: Consolidated Final Version
 * Includes: Student Data, Quiz Bank, and Application Logic
 */

// 1. Student Data (Full list + 5 Test Accounts)
// 1. Student Data (Full list + 5 Test Accounts)
const STUDENT_DATA = [
    { "id": "test01", "name": "测试账号1" },
    { "id": "test02", "name": "测试账号2" },
    { "id": "test03", "name": "测试账号3" },
    { "id": "test04", "name": "测试账号4" },
    { "id": "test05", "name": "测试账号5" },
    { "id": "3231711101", "name": "陈丹妮" },
    { "id": "3231711102", "name": "丁杭荧" },
    { "id": "3231711103", "name": "耿梦钰" },
    { "id": "3231711104", "name": "郭思琪" },
    { "id": "3231711105", "name": "李明珠" },
    { "id": "3231711106", "name": "刘峻含" },
    { "id": "3231711107", "name": "马慧莹" },
    { "id": "3231711108", "name": "张婷" },
    { "id": "3231711109", "name": "张晓凤" },
    { "id": "3231711110", "name": "曹云翔" },
    { "id": "3231711111", "name": "黎中巍" },
    { "id": "3231711113", "name": "陈会阳" },
    { "id": "3231711114", "name": "丁冉" },
    { "id": "3231711115", "name": "扶炜熙" },
    { "id": "3231711116", "name": "郭永淳" },
    { "id": "3231711117", "name": "何烁" },
    { "id": "3231711118", "name": "刘俊" },
    { "id": "3231711119", "name": "刘维杰" },
    { "id": "3231711120", "name": "龙弈铮" },
    { "id": "3231711121", "name": "蒙亚正" },
    { "id": "3231711122", "name": "屈钶航" },
    { "id": "3231711124", "name": "孙浩然" },
    { "id": "3231711126", "name": "韦钊雨" },
    { "id": "3231711128", "name": "杨宇凡" },
    { "id": "3231711129", "name": "张博栋" },
    { "id": "3231711130", "name": "张俊" }
];

// 2. Quiz Bank (Formal Exams - Hidden from main list, require entryCode)
const allQuizzes = {
    'quiz01': {
        title: 'Quiz01',
        entryCode: 'R2K7X9',
        resetCode: 'R88S01',
        questions: [
            { id: 1, type: 'single', question: 'The term "tangible" in the text most likely means:', options: ['A. 无关的', 'B. 有形的', 'C. 显著的', 'D. 可疑的'], answer: 'B' },
            { id: 2, type: 'single', question: '"Affixed to" in the context of the passage is best translated to:', options: ['A. 连接到', 'B. 替换为', 'C. 从属于', 'D. 附着于'], answer: 'D' },
            { id: 3, type: 'single', question: 'The phrase "distinguish... from..." means:', options: ['A. 将……转换为……', 'B. 把……与……混合', 'C. 将……与……区分开', 'D. 把……给予……'], answer: 'C' },
            { id: 4, type: 'single', question: '"Movability" refers to the characteristic of being:', options: ['A. 可移动性', 'B. 可测量性', 'C. 可见性', 'D. 可预测性'], answer: 'A' },
            { id: 5, type: 'single', question: '"Obsolescence" in the passage is best translated as:', options: ['A. 增值', 'B. 耗损', 'C. 过时', 'D. 改善'], answer: 'C' },
            { id: 6, type: 'single', question: 'The word "entity" in this context most closely means:', options: ['A. 企业', 'B. 设备', 'C. 实体', 'D. 财产'], answer: 'C' },
            { id: 7, type: 'single', question: '"Depreciation" is best translated as:', options: ['A. 升值', 'B. 折旧', 'C. 评价', 'D. 购买'], answer: 'B' },
            { id: 8, type: 'single', question: '"Hypothetical exchange" refers to:', options: ['A. 实际交易', 'B. 假设交换', 'C. 外汇交易', 'D. 股票交易'], answer: 'B' },
            { id: 9, type: 'single', question: '"Functional (technical) obsolescence" indicates a loss in value due to:', options: ['A. 物理损坏', 'B. 市场需求增加', 'C. 功能或技术过时', 'D. 外部环境改善'], answer: 'C' },
            { id: 10, type: 'single', question: '"Systematic allocation" in accounting means:', options: ['A. 随机分配', 'B. 系统分摊', 'C. 剩余计算', 'D. 累计增加'], answer: 'B' }
        ]
    },
    'quiz02': {
        title: 'Quiz02',
        entryCode: 'M4W3B5',
        resetCode: 'R99S02',
        questions: [
            // 单选题
            { id: 1, type: 'single', question: 'What does real property include according to the text?', options: ['A. Only the physical land.', 'B. All rights and benefits related to the ownership of real estate.', 'C. Movable furniture', 'D. It is a physical concept.'], answer: 'B' },
            { id: 2, type: 'single', question: 'Which of the following statements about assets is correct?', options: ['A. Assets can only be tangible.', 'B. Ownership of an asset is itself tangible.', 'C. Assets include resources controlled as a result of past events.', 'D. Assets do not include intangible assets.'], answer: 'C' },
            { id: 3, type: 'single', question: 'Which of the following are examples of intangible assets?', options: ['A. Cash', 'B. Patents', 'C. Machinery', 'D. Inventory'], answer: 'B' },
            { id: 4, type: 'single', question: 'Which of the following do not belong to the distinction between real estate and personal property?', options: ['A. Real estate is tangible, and personal property can be tangible or intangible.', 'B. Real estate is typically fixed on land, while personal property is movable.', 'C. Real estate includes ownership rights and benefits, while personal property does not include ownership rights.', 'D. Local laws distinguish between real estate and personal property.'], answer: 'C' },
            { id: 5, type: 'single', question: 'Regarding real property, which statement is correct?', options: ['A. Real property is tangible and can be touched.', 'B. Real property includes all rights and benefits related to real estate ownership.', 'C. Real property primarily refers to physical land and buildings on it.', 'D. Real property cannot be demonstrated via title deeds.'], answer: 'B' },
            // 多选题
            { id: 6, type: 'multiple', question: 'Which of the following are considered real estate?', options: ['A. A residential building', 'B. A car', 'C. A swimming pool attached to land', 'D. A laptop computer'], answer: 'AC' },
            { id: 7, type: 'multiple', question: 'Which of the following are considered personal property?', options: ['A. Household appliances', 'B. Trees on the land', 'C. Computers in an office', 'D. Fixed fixtures in a building'], answer: 'AC' },
            { id: 8, type: 'multiple', question: 'Regarding depreciation, which statements are correct?', options: ['A. In asset valuation, depreciation refers to the market price of the asset.', 'B. In financial reporting, depreciation is the systematic allocation of the depreciable amount over the asset\'s useful life.', 'C. In asset valuation, depreciation considers physical deterioration and obsolescence.', 'D. In financial reporting, depreciation is heavily influenced by market conditions.'], answer: 'BC' },
            { id: 9, type: 'multiple', question: 'Which of the following describe characteristics of personal property?', options: ['A. Permanently affixed to real estate.', 'B. Generally movable.', 'C. Includes tangible and intangible items.', 'D. Distinguished from real property by local laws.'], answer: 'BCD' },
            { id: 10, type: 'multiple', question: 'Regarding the definition of assets, which statements are correct?', options: ['A. Assets refer only to physical items owned by an entity.', 'B. Ownership of an asset is an intangible right.', 'C. Assets include resources expected to bring future economic benefits.', 'D. Assets cannot be generated by past events.'], answer: 'BC' }
        ]
    },
    'quiz03': {
        title: 'Quiz03',
        entryCode: 'P6N1L8',
        resetCode: 'R77S03',
        questions: [
            { id: 1, type: 'single', question: 'What does the term "space market" refer to in the context of the real estate system?', options: ['A. The market for buying and selling real estate assets', 'B. The market where physical space is supplied and demanded', 'C. The market for long term leases of property', 'D. The market where development costs are determined'], answer: 'B' },
            { id: 2, type: 'single', question: 'What are "exogenous systems" in the context of the real estate system?', options: ['A. Systems that are internal to the real estate market', 'B. Systems that are external to the real estate market, such as macroeconomies and capital markets', 'C. Systems that regulate the flow of financial capital', 'D. Systems that determine the supply of physical space'], answer: 'B' },
            { id: 3, type: 'single', question: 'What does "forward looking" mean in the context of the real estate system?', options: ['A. Focusing only on current market conditions', 'B. Planning and predicting future conditions and trends', 'C. Looking back at historical data for decision making', 'D. Ignoring future risks and opportunities'], answer: 'B' },
            { id: 4, type: 'single', question: 'What is the "asset market" in the context of the real estate system?', options: ['A. The market where physical construction takes place', 'B. The market where real estate assets are bought and sold based on their operating cash flows and cap rates', 'C. The market where land acquisition costs are determined', 'D. The market where long term leases are negotiated'], answer: 'B' },
            { id: 5, type: 'single', question: 'What does "cap rates" stand for in the real estate asset market?', options: ['A. Capital appreciation rates', 'B. Capitalization rates', 'C. Capture rates', 'D. Cash flow rates'], answer: 'B' },
            { id: 6, type: 'single', question: 'What is the "opportunity value of the land" in the context of development costs?', options: ['A. The cost of acquiring the land for development', 'B. The potential value of the land if used for other purposes', 'C. The historical cost of the land', 'D. The profit margin required by the developer'], answer: 'B' },
            { id: 7, type: 'single', question: 'What does "negative feedback loops" mean in the context of the real estate system?', options: ['A. Loops that cause the system to spiral out of control', 'B. Mechanisms that amplify market fluctuations', 'C. Mechanisms that help regulate and stabilize the system', 'D. Feedback from unhappy investors'], answer: 'C' },
            { id: 8, type: 'single', question: 'What is the "development industry" in the context of the real estate system?', options: ['A. The industry responsible for regulating financial capital', 'B. The industry that focuses on long term leasing of properties', 'C. The industry that constructs and develops physical space', 'D. The industry that determines cap rates'], answer: 'C' },
            { id: 9, type: 'single', question: 'What does "operating cash flows" refer to in the context of real estate assets?', options: ['A. The cash flows generated from the sale of assets', 'B. The cash flows generated from the operation of the assets', 'C. The cash flows required for development', 'D. The cash flows from long term leases'], answer: 'B' },
            { id: 10, type: 'single', question: 'What does "equilibrium level" mean in the context of the real estate system?', options: ['A. The highest level of rents achievable', 'B. The lowest level of rents achievable', 'C. The balance point where supply meets demand in the long run', 'D. The initial level of rents set by developers'], answer: 'C' }
        ]
    },
    'quiz04': {
        title: 'Quiz04',
        entryCode: 'V9Q2Z4',
        resetCode: 'R66S04',
        questions: [
            { id: 1, type: 'single', question: 'What are the three major components of the real estate system as introduced in Section 2?', options: ['A. Space market, financial market, construction industry', 'B. Space market, asset market, development industry', 'C. Asset market, labor market, development industry', 'D. Space market, housing market, investment industry'], answer: 'B' },
            { id: 2, type: 'single', question: 'Which external systems are linked to the real estate system according to Exhibit 1-1?', options: ['A. Technology and education systems', 'B. National and local macro-economies and national and international capital markets', 'C. Healthcare and transportation systems', 'D. Environmental and agricultural systems'], answer: 'B' },
            { id: 3, type: 'single', question: 'In the space market, what determines the current rents and occupancy levels?', options: ['A. Government regulations', 'B. Interaction of usage demand with the current stock of physical space supply', 'C. International trade agreements', 'D. Technological advancements'], answer: 'B' },
            { id: 4, type: 'single', question: 'What governs the supply side of the space market?', options: ['A. Consumer preferences', 'B. Past and current activities of the development industry', 'C. Interest rates', 'D. Foreign investment'], answer: 'B' },
            { id: 5, type: 'single', question: 'How do operating cash flows interact within the asset market to determine property market values?', options: ['A. They are compared against historical costs', 'B. They interact with cap rates required by investors', 'C. They are adjusted for inflation', 'D. They are matched with market rents'], answer: 'B' },
            { id: 6, type: 'single', question: 'What primarily influences the cap rates that investors require in real estate deals?', options: ['A. Historical property prices', 'B. Investors’ forecasts about future space market conditions', 'C. Government tax policies', 'D. The age of the property'], answer: 'B' },
            { id: 7, type: 'single', question: 'In the development industry, what condition must be met for development to proceed?', options: ['A. Development costs must be lower than the previous year’s costs', 'B. Asset values must equal or exceed development costs', 'C. There must be no competing developments nearby', 'D. Government approval must be obtained'], answer: 'B' },
            { id: 8, type: 'single', question: 'What role do negative feedback loops play in the real estate system?', options: ['A. They accelerate market booms', 'B. They create unregulated growth', 'C. They act as dampening mechanisms to self-regulate the system', 'D. They eliminate the need for investor participation'], answer: 'C' },
            { id: 9, type: 'single', question: 'How did improvements in asset market efficiency during the 1990s affect the real estate system?', options: ['A. They led to increased boom and bust cycles', 'B. They reduced the role of public capital markets', 'C. They gave hope that the system may work better in the future', 'D. They eliminated the need for development industry'], answer: 'C' },
            { id: 10, type: 'single', question: 'Why are asset market participants considered inherently forward-looking?', options: ['A. They focus only on current cash flows', 'B. Their investment decisions are based on past performance', 'C. They forecast future income streams and economic factors to determine asset values', 'D. They rely solely on historical data for investment decisions'], answer: 'C' }
        ]
    },
    'quiz05': {
        title: 'Quiz05',
        entryCode: 'H5C7F2',
        resetCode: 'R55S05',
        questions: [
            { id: 1, type: 'single', question: 'Which of the following best describes the initial stage of real estate development?', options: ['A. Conducting a market study', 'B. Purchasing land', 'C. Developing a project concept', 'D. Hiring a marketing firm'], answer: 'C' },
            { id: 2, type: 'single', question: 'What is the primary purpose of a market study in the development process?', options: ['A. To determine the cost of infrastructure development', 'B. To identify the most popular types of housing and market segments', 'C. To secure government approvals', 'D. To finalize the project design'], answer: 'B' },
            { id: 3, type: 'single', question: 'What is a key factor in determining if a parcel of land is suitable for development?', options: ['A. The historical value of the land', 'B. The zoning and physical characteristics of the land', 'C. The current use of the land', 'D. The previous owners of the land'], answer: 'B' },
            { id: 4, type: 'single', question: 'What is the "Golden Rule of Real Estate Development"?', options: ['A. Always conduct a market study', 'B. Those who control the land make the rules', 'C. Secure financing before purchasing land', 'D. Hire a professional marketing firm'], answer: 'B' },
            { id: 5, type: 'single', question: 'Which of the following is NOT typically included in a land acquisition study?', options: ['A. Environmental analysis', 'B. Legal assessment', 'C. Marketing strategy development', 'D. Property inventory'], answer: 'C' },
            { id: 6, type: 'single', question: 'What is the role of the architect/land planner in the initial stages of development?', options: ['A. To secure government approvals', 'B. To develop sketches of the project based on land acquisition and marketing studies', 'C. To conduct the market study', 'D. To finance the project'], answer: 'B' },
            { id: 7, type: 'single', question: 'What is a common reason for developers to approach a lending institution?', options: ['A. To conduct a market study', 'B. To secure financing for the project', 'C. To obtain government approvals', 'D. To develop a sales program'], answer: 'B' },
            { id: 8, type: 'single', question: 'What must be obtained from the municipality during the development process?', options: ['A. A pro forma', 'B. Zoning and subdivision approval', 'C. A marketing strategy', 'D. A construction manager'], answer: 'B' },
            { id: 9, type: 'single', question: 'What is a critical decision point in the development process?', options: ['A. Deciding on the project\'s marketing strategy', 'B. Determining if the project is viable', 'C. Choosing the construction materials', 'D. Selecting the sales team'], answer: 'B' },
            { id: 10, type: 'single', question: 'What is the first step in the construction phase of a development project?', options: ['A. Issuing building permits', 'B. Constructing infrastructure', 'C. Hiring subcontractors', 'D. Developing a sales program'], answer: 'B' }
        ]
    },
    'quiz06': {
        title: 'Quiz06',
        entryCode: 'T3S8J1',
        resetCode: 'R44S06',
        questions: [
            { id: 1, type: 'single', question: 'What does "Infrastructure development" include?', options: ['A. Construction of water, sewer, and roads', 'B. Legal assessment of zoning regulations', 'C. Environmental analysis of the land', 'D. Marketing strategy development'], answer: 'A' },
            { id: 2, type: 'single', question: 'What does "Zoning" refer to?', options: ['A. The process of constructing buildings on the land', 'B. The legal restrictions on how land can be used', 'C. The study of the physical characteristics of the land', 'D. The marketing strategy for selling properties'], answer: 'B' },
            { id: 3, type: 'single', question: 'What does "Pro forma" refer to?', options: ['A. A detailed environmental analysis', 'B. A prediction of future financial performance based on assumptions', 'C. A legal document for government approvals', 'D. A marketing strategy for the project'], answer: 'B' },
            { id: 4, type: 'single', question: 'What is a "Joint venture" in the context of real estate development?', options: ['A. A type of environmental regulation', 'B. A partnership between multiple investors to develop a project', 'C. A legal assessment of zoning regulations', 'D. A marketing strategy for selling properties'], answer: 'B' },
            { id: 5, type: 'single', question: 'What does "Land acquisition" refer to in real estate development?', options: ['A. The process of converting land into economically valuable real estate projects', 'B. The act of purchasing or leasing land for development', 'C. The construction of infrastructure on the land', 'D. The marketing of properties on the land'], answer: 'B' },
            { id: 6, type: 'single', question: 'What is "Topographical features" in the context of land assessment?', options: ['A. The legal restrictions on how land can be used', 'B. The physical characteristics of the land, such as slope and elevation', 'C. The study of the market demand for different types of housing', 'D. The management of construction activities on the land'], answer: 'B' },
            { id: 7, type: 'single', question: 'What does "Settlement" refer to in the context of real estate development?', options: ['A. The process of constructing infrastructure', 'B. The completion of the developer\'s efforts, where the lender is paid off, and the buyer receives the property', 'C. The initial planning stage of the project', 'D. The marketing phase of the project'], answer: 'B' },
            { id: 8, type: 'single', question: 'What does "feasibility" refer to in the context of a preliminary feasibility study?', options: ['A. The cost of the project', 'B. The possibility of successfully carrying out the project', 'C. The legal requirements for the project', 'D. The marketing strategy for the project'], answer: 'B' },
            { id: 9, type: 'single', question: 'What is the role of the "municipality" in the development process?', options: ['A. To provide financial support', 'B. To conduct market studies', 'C. To grant zoning and subdivision approvals', 'D. To build infrastructure'], answer: 'C' },
            { id: 10, type: 'single', question: 'What does "culmination" mean in the context of the development process?', options: ['A. The beginning of the project', 'B. The middle stage of the project', 'C. The end or final result of the project', 'D. The planning phase of the project'], answer: 'C' }
        ]
    },
    'quiz07': {
        title: 'Quiz07',
        entryCode: 'G4D9Y6',
        resetCode: 'R33S07',
        questions: [
            { id: 1, type: 'single', question: 'What does the term "rank/size rule" refer to in the context of city sizes?', options: ['A. A rule that ranks cities based on their economic output', 'B. A pattern where city population is inversely proportional to its rank', 'C. A regulation that limits the size of cities', 'D. A law that dictates the location of cities'], answer: 'B' },
            { id: 2, type: 'single', question: 'What are "centripetal forces" in the context of urban development?', options: ['A. Forces that push cities apart', 'B. Forces that attract people and activities to the center of cities', 'C. Forces that cause cities to decline', 'D. Forces that limit the growth of cities'], answer: 'B' },
            { id: 3, type: 'single', question: 'What are "centrifugal forces" in the context of urban development?', options: ['A. Forces that attract people and activities to the center of cities', 'B. Forces that push people and activities away from the center of cities', 'C. Forces that cause cities to grow rapidly', 'D. Forces that have no effect on cities'], answer: 'B' },
            { id: 4, type: 'single', question: 'What is meant by "economies of scale" in urban economics?', options: ['A. The cost advantages of producing goods in larger quantities at fewer sites', 'B. The cost advantages of producing goods in smaller quantities at more sites', 'C. The economic benefits of having a large population', 'D. The economic benefits of having a small population'], answer: 'A' },
            { id: 5, type: 'single', question: 'What is meant by "economies of agglomeration"?', options: ['A. The cost advantages of clustering firms or work sites physically near each other', 'B. The cost disadvantages of clustering firms or work sites physically near each other', 'C. The economic benefits of having a large population', 'D. The economic benefits of having a small population'], answer: 'A' },
            { id: 6, type: 'single', question: 'What are "positive locational externalities"?', options: ['A. Benefits that one firm gains from the nearby location of another firm', 'B. Costs that one firm incurs due to the nearby location of another firm', 'C. Benefits that a city gains from its location', 'D. Costs that a city incurs due to its location'], answer: 'A' },
            { id: 7, type: 'single', question: 'What is "Zipf\'s Law" in the context of city sizes?', options: ['A. A law that states all cities grow at the same rate', 'B. A principle that describes the relationship between city size and its rank in a system of cities', 'C. A rule that all cities must follow in terms of population', 'D. A law that dictates the location of cities'], answer: 'B' },
            { id: 8, type: 'single', question: 'What does "synergy" mean in the context of urban economics?', options: ['A. The process of dividing resources', 'B. The combined effect of two or more entities working together', 'C. The separation of different industries', 'D. The competition between firms'], answer: 'B' },
            { id: 9, type: 'single', question: 'What are "vertical linkages" in the context of urban economics?', options: ['A. Connections between firms at the same stage of production', 'B. Connections between different stages of a production process', 'C. Connections between cities and rural areas', 'D. Connections between different industries'], answer: 'B' },
            { id: 10, type: 'single', question: 'What are "horizontal linkages" in the context of urban economics?', options: ['A. Connections between firms at the same stage of production', 'B. Connections between different stages of a production process', 'C. Connections between cities and rural areas', 'D. Connections between different industries'], answer: 'A' }
        ]
    },
    'quiz08': {
        title: 'Quiz08',
        entryCode: 'A7X2K4',
        resetCode: 'R22S08',
        questions: [
            { id: 1, type: 'single', question: 'According to the passage, why might a high-rise upscale apartment building not succeed in a regional center like Des Moines, Iowa?', options: ['A. Because high-rise buildings are not allowed in regional centers.', 'B. Because the economic characteristics of Des Moines do not support such buildings.', 'C. Because Des Moines is not a large financial center.', 'D. Because the population of Des Moines is too small.'], answer: 'B' },
            { id: 2, type: 'single', question: 'What is the primary implication of the rank/size rule for real estate markets in cities?', options: ['A. All cities will have the same type of real estate.', 'B. Real estate types depend on the city\'s size and economic characteristics.', 'C. Real estate markets are not affected by city size.', 'D. Only large cities can have high-rise buildings.'], answer: 'B' },
            { id: 3, type: 'single', question: 'What are the two basic physical characteristics that describe cities mentioned in the passage?', options: ['A. Size and economic output', 'B. Size and location', 'C. Economic output and location', 'D. Population and economic output'], answer: 'B' },
            { id: 4, type: 'single', question: 'What is the effect of city size on space markets according to the passage?', options: ['A. Larger cities tend to have lower real rents.', 'B. Smaller cities tend to have higher real rents.', 'C. Larger, more rapidly growing cities can sustain higher real rents.', 'D. City size has no impact on space markets.'], answer: 'C' },
            { id: 5, type: 'single', question: 'What does the passage suggest about the location of cities of similar size?', options: ['A. They are usually located near each other.', 'B. They are generally far apart from each other.', 'C. They are always located in the same region.', 'D. Their location is random.'], answer: 'B' },
            { id: 6, type: 'single', question: 'What happens when centralizing forces become more powerful in a society?', options: ['A. Small cities grow faster than large cities.', 'B. Large cities grow faster than small cities.', 'C. All cities grow at the same rate.', 'D. Cities do not grow at all.'], answer: 'B' },
            { id: 7, type: 'single', question: 'What are the three primary centralizing forces that cause cities to coalesce?', options: ['A. Economies of scale, economies of agglomeration, and positive locational externalities.', 'B. High rents, urban-land costs, and congestion.', 'C. Pollution, crime, and high intra-urban transportation costs.', 'D. Reductions in transport and communication costs and the rise of centralized governmental institutions.'], answer: 'A' },
            { id: 8, type: 'single', question: 'What is an example of a positive locational externality mentioned in the passage?', options: ['A. A trucking firm benefiting from the establishment of an airfreight hub in the same city.', 'B. A city experiencing high rents and urban-land costs.', 'C. A city with high levels of pollution and crime.', 'D. A city with high intra-urban transportation costs.'], answer: 'A' },
            { id: 9, type: 'single', question: 'What is the impact of larger cities on rural-to-urban transport costs?', options: ['A. They decrease rural-to-urban transport costs.', 'B. They increase rural-to-urban transport costs.', 'C. They have no impact on rural-to-urban transport costs.', 'D. They only affect city-to-city transport costs.'], answer: 'B' },
            { id: 10, type: 'single', question: 'Which types of activities are highly concentrated in a few large cities?', options: ['A. Light manufacturing and distribution.', 'B. Corporate and governmental research.', 'C. Upper-level national governmental functions and international financial services.', 'D. Lower-level governmental and corporate-managerial functions.'], answer: 'C' }
        ]
    },
    'quiz09': {
        title: 'Quiz09',
        entryCode: 'E1B6M8',
        resetCode: 'R11S09',
        questions: [
            { id: 1, type: 'single', question: 'The relationship between human beings and the land is of fundamental importance in every society and is evident in the form of _ .', options: ['A. property rights', 'B. land use', 'C. land management', 'D. land resources'], answer: 'A' },
            { id: 2, type: 'single', question: 'In the land reform programmes of the 1960s,especially in Africa,new land tenure arrangements such as the granting of individual freehold rights were introduced,often _ to traditional custom and practice.', options: ['A. according', 'B. contrary', 'C. similar', 'D. related'], answer: 'B' },
            { id: 3, type: 'single', question: 'Land,together with its associated buildings and construction,is one of the most important financial assets in any country.Every investment is in some way or another dependent on land and property, _ .', options: ['A. without which no shop or factory can be built', 'B. without which no road or railway can be constructed', 'C. without which there can be no schools or hospitals', 'D. all of the above'], answer: 'D' },
            { id: 4, type: 'single', question: 'A land administration system provides a mechanism that supports the management of real property.The basic building block in any land administration system is the _ .', options: ['A. cadastral parcel', 'B. land registration', 'C. land valuation', 'D. surveying and mapping'], answer: 'A' },
            { id: 5, type: 'single', question: 'The UN definition(UN 1995)places more explicit emphasis on _ aspects.', options: ['A. economic', 'B. social', 'C. environmental', 'D. cultural'], answer: 'C' },
            { id: 6, type: 'single', question: 'The components of the natural land unit (e.g.physical,biotic,environmental,infrastructural,socio-economic)are termed _ .', options: ['A. land resources', 'B. land units', 'C. land systems', 'D. land attributes'], answer: 'A' },
            { id: 7, type: 'single', question: 'Major freshwater bodies,underground geological resources and deeper geohydrological resources are excluded and considered a separate resource _ .', options: ['A. for reasons of management', 'B. for reasons of classification', 'C. for reasons of definition', 'D. for reasons of convenience'], answer: 'A' },
            { id: 8, type: 'single', question: 'Land and property are financial assets and can attract significant amounts of inward investment.A study by the Economist Intelligence Unit into global direct investment noted the importance of real estate and the property sector in foreign direct investment(FDI).It suggested that _ .', options: ['A. the importance of real estate in FDI is easy to gauge', 'B. statistics on foreign direct investment flows into real estate are standardized', 'C. the real estate component of FDI could be anywhere between 5%-20%of the total', 'D. the real estate sector is not burdened by country-specific restrictions'], answer: 'C' },
            { id: 9, type: 'single', question: 'One of the conclusions of the report was that there is a danger of a mismatch between a liberalized global economy with strong free capital flows and a heavily restricted real estate sector burdened by country-specific restrictions. The results will be barriers to FDI and trade. Global harmonization of property markets and standardization of rules and regulations governing real estate are necessary steps to _ investor confidence.', options: ['A. boost', 'B. reduce', 'C. maintain', 'D. undermine'], answer: 'A' },
            { id: 10, type: 'single', question: 'The processes of land administration include _ .', options: ['A. the regulating of land and property development', 'B. the use and conversation of the land', 'C. the gathering of revenues from the land through sales,leasing,and taxation', 'D. all of the above'], answer: 'D' }
        ]
    },
    'quiz10': {
        title: 'Quiz10',
        entryCode: 'N5R4V9',
        resetCode: 'R00S10',
        questions: [
            { id: 1, type: 'single', question: 'Which of the following roles might a valuer NOT be instructed to advise on?', options: ['A. Buyers on offer prices', 'B. Owners on the price they should ask', 'C. Tenants on the rent they should pay', 'D. Employees on salary negotiation'], answer: 'D' },
            { id: 2, type: 'single', question: 'What does "heterogeneous" most closely relate to in the context of property?', options: ['A. Uniform quality', 'B. Diverse in nature', 'C. Identical appearance', 'D. Standardized size'], answer: 'B' },
            { id: 3, type: 'single', question: 'What is the role of personal details of a client in property valuation?', options: ['A. They are not necessary', 'B. They ensure uniform valuation', 'C. They may be necessary for different individuals', 'D. They guarantee property ownership'], answer: 'C' },
            { id: 4, type: 'single', question: 'How does the valuer’s estimate of value depend on their skills?', options: ['A. By their negotiation skills', 'B. By their knowledge and understanding of market movements', 'C. By their design skills', 'D. By their sales skills'], answer: 'B' },
            { id: 5, type: 'single', question: 'What is the relationship between demand and supply in a freely operating market?', options: ['A. They are inversely proportional', 'B. They are equal regardless of price', 'C. They determine price', 'D. They have no relation'], answer: 'C' },
            { id: 6, type: 'single', question: 'What is the impact of demand on price in a market?', options: ['A. Demand has no impact', 'B. An increase in demand causes price to rise', 'C. An increase in demand has no effect', 'D. A decrease in demand results in price rise'], answer: 'B' },
            { id: 7, type: 'single', question: 'What does "elasticity" refer to in the context of price changes?', options: ['A. The rigidity of supply and demand', 'B. The ability of supply and demand to adjust to price changes', 'C. The fixed nature of prices', 'D. The lack of responsiveness in the market'], answer: 'B' },
            { id: 8, type: 'single', question: 'What is the role of a valuer in estimating market value (MV) or market rent (MR)?', options: ['A. To conduct transactions', 'B. To provide professional advice', 'C. To manage properties', 'D. To collect rent'], answer: 'B' },
            { id: 9, type: 'single', question: 'According to the text, what is NOT a characteristic of the property market?', options: ['A. It is imperfect', 'B. It is homogeneous', 'C. It involves complex legal interests', 'D. It lacks public information'], answer: 'B' },
            { id: 10, type: 'single', question: 'What is meant by "effective demand" in the context of property transactions?', options: ['A. Demand that is not backed by money', 'B. Demand that is backed by money', 'C. Demand that is irrelevant', 'D. Demand that is illegal'], answer: 'B' }
        ]
    }
};

// 3. Global State
let currentQuizId = null;
let currentQuiz = null;
let currentUser = null;
let quizQuestions = [];
let currentIndex = 0;
let userAnswers = [];
let startTime = 0;
let timerInterval = null;
let switchCount = 0;
const MAX_SWITCHES = 3;
const TOTAL_SECONDS = 15 * 60;
const TABLE_NAME = 'quiz_results';

/**
 * Anti-Cheating: Detect Visibility Change
 */
document.addEventListener('visibilitychange', () => {
    // Only track if quiz is active
    if (document.getElementById('viewQuiz').style.display === 'block' && document.visibilityState === 'hidden') {
        switchCount++;
        alert(`警告：由于检测到离开本页面，切屏计数已增加（当前已切屏 ${switchCount} 次）。\n切屏超过 ${MAX_SWITCHES} 次将自动强制交卷！`);

        if (switchCount >= MAX_SWITCHES) {
            alert('您切屏次数过多，系统将自动提交试卷。');
            submitQuiz();
        }
    }
});

/**
 * Anti-Cheating: Interaction Restrictions
 */
// Disable Context Menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable Copy/Paste/Cut/Drag/Select
['copy', 'cut', 'paste', 'dragstart', 'selectstart'].forEach(event => {
    document.addEventListener(event, e => {
        // Allow in input fields
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });
});

// Disable Long-press on mobile (extra measure)
document.addEventListener('touchstart', e => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        // This can be aggressive, but ensures no context menu pops up
        // Note: Using CSS -webkit-touch-callout: none is cleaner, but JS adds another layer
    }
}, { passive: true });

// Disable Specific Key Shortcuts
document.addEventListener('keydown', e => {
    // F12
    if (e.keyCode === 123) { e.preventDefault(); return false; }

    // Ctrl+Shift+I/J/C
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+A (Select All)
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 88 || e.keyCode === 65)) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            return false;
        }
    }

    // Ctrl+S, Ctrl+P, Ctrl+U
    if (e.ctrlKey && (e.keyCode === 83 || e.keyCode === 80 || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // Windows Key + Shift + S (Screenshot) - Note: Hard to block fully, but we add preventative measures
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.keyCode === 83) {
        e.preventDefault();
        return false;
    }

    // PrintScreen
    if (e.keyCode === 44) {
        alert('系统已检测到截屏操作，请尊重版权及考试规则。');
        // Clear clipboard if possible (browser dependent)
        navigator.clipboard.writeText("");
    }
});

// 4. Initialization
document.addEventListener('DOMContentLoaded', () => {
    // UI Setup immediately (Don't wait for network)
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Strict Routing:
    if (id && allQuizzes[id]) {
        currentQuizId = id;
        currentQuiz = allQuizzes[id];
        showSection('viewEntrance');
        setupEntrance();
    } else {
        showSection('viewSelection');
    }

    // Bind Retake Button
    const btnRetake = document.getElementById('btnRetake');
    if (btnRetake) {
        btnRetake.onclick = () => location.reload();
    }

    // Background Init: Config & BaaS
    (async () => {
        let LOCAL_MINAPP_ID = '65a570ce339823f1faf4';
        try {
            // Set a timeout for config fetch to avoid long pending state if completely broken
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            const res = await fetch('/api/config', { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                if (data.minapp_id) LOCAL_MINAPP_ID = data.minapp_id;
            }
        } catch (e) {
            console.warn('Config fetch failed/timed out, using default ID:', e);
        }

        try {
            if (typeof BaaS !== 'undefined') {
                BaaS.init(LOCAL_MINAPP_ID);
                // Non-blocking login with extra safety for SDK internals
                BaaS.auth.anonymousLogin().then(() => {
                    console.log('✅ MinApp Logged In (Background)');
                }).catch(e => {
                    // SDK might throw if response is undefined (CORS/Network error)
                    console.warn('⚠️ MinApp Login Failed (Background). This is normal on localhost if CORS is not configured:', e?.message || e);
                });
                console.log('✅ MinApp Initialized with ID:', LOCAL_MINAPP_ID);
            } else {
                console.error('❌ BaaS SDK not loaded!');
            }
        } catch (e) { console.error('❌ MinApp Init Error:', e); }
    })();
});

// 5. UI Logic
function showSection(sectionId) {
    ['viewSelection', 'viewEntrance', 'viewQuiz'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === sectionId) ? 'block' : 'none';
    });
}

function setupEntrance() {
    document.getElementById('entranceTitle').textContent = currentQuiz.title;
    const idInput = document.getElementById('studentIdInput');
    const nameInput = document.getElementById('studentNameInput');
    const entryInput = document.getElementById('entryCodeInput');
    const startBtn = document.getElementById('btnStart');
    const feedback = document.getElementById('loginFeedback');

    // Make name input read-only to enforce the whitelist link
    nameInput.readOnly = true;
    nameInput.placeholder = "输入学号后自动补全";

    function validate() {
        const sid = idInput.value.trim();
        const code = entryInput.value.trim();

        feedback.textContent = "";

        // 1. Real-time Lookup by ID
        const student = STUDENT_DATA.find(s => s.id === sid);

        // Only trigger lookup after 4 digits to avoid distracting flashes
        if (sid.length >= 4) {
            if (student) {
                nameInput.value = student.name;
                feedback.innerHTML = `<span style="color: #059669;">✔ 欢迎你，${student.name}</span>`;
                currentUser = student;
            } else {
                nameInput.value = "";
                feedback.innerHTML = `<span style="color: #ef4444;">✘ 学号无效</span>`;
                currentUser = null;
            }
        } else {
            nameInput.value = "";
            feedback.textContent = "";
            currentUser = null;
        }

        // 2. Button Activation Logic
        // Check if student has already completed the quiz
        const hasCompleted = currentUser && localStorage.getItem(`completed_${currentQuizId}_${currentUser.id}`) === 'true';

        const isEntryCode = code === currentQuiz.entryCode;
        const isResetCode = currentQuiz.resetCode && code === currentQuiz.resetCode;

        if (currentUser) {
            if (hasCompleted) {
                if (isResetCode) {
                    feedback.innerHTML += `<br><span style="color: #059669;">★ 重置口令已确认，可重新考试</span>`;
                    startBtn.disabled = false;
                } else {
                    feedback.innerHTML += `<br><span style="color: #ef4444;">⚠️ 您已完成此测验，如需重考请输入重置口令</span>`;
                    startBtn.disabled = true;
                }
            } else {
                if (isEntryCode || isResetCode) {
                    startBtn.disabled = false;
                } else {
                    startBtn.disabled = true;
                }
            }
        } else {
            startBtn.disabled = true;
        }
    }

    [idInput, entryInput].forEach(el => el.addEventListener('input', validate));

    startBtn.onclick = () => {
        document.getElementById('headerStudentName').textContent = currentUser.name;
        // Clear any previous execution cache if resetting
        const code = entryInput.value.trim();
        if (code === currentQuiz.resetCode) {
            console.log("Reset code used, ensuring clean state...");
            // Local storage flag 'completed_...' does not need to be deleted, 
            // because we allow re-submission anyway as new record.
        }
        startQuiz();
    };
}

function startQuiz() {
    startTime = Date.now();

    // Deep copy and shuffle questions
    quizQuestions = shuffleArray([...currentQuiz.questions]).map(q => {
        const newQ = { ...q };
        // If it's a type with options, shuffle them
        if (newQ.options && newQ.options.length > 0) {
            // Find the text of the correct answer first
            // Note: Our options are like ['A. Option text', 'B. ...']
            const originalAnswers = newQ.answer.split(''); // For multiple choice
            const correctAnswerTexts = newQ.options
                .filter(opt => originalAnswers.includes(opt[0]))
                .map(opt => opt.substring(2).trim());

            // Shuffle the option texts (without the A. B. C. prefix)
            const shuffledOptionTexts = shuffleArray(newQ.options.map(opt => opt.substring(2).trim()));

            // Reconstruct options with new letters
            newQ.options = shuffledOptionTexts.map((text, idx) => {
                const letter = String.fromCharCode(65 + idx); // A, B, C...
                return `${letter}. ${text}`;
            });

            // Re-map the correct answer letter(s)
            const newAnswerLetters = newQ.options
                .filter(opt => correctAnswerTexts.includes(opt.substring(2).trim()))
                .map(opt => opt[0])
                .sort();

            newQ.answer = newAnswerLetters.join('');
        }
        return newQ;
    });

    currentIndex = 0;
    userAnswers = [];
    switchCount = 0;
    document.getElementById('totalQuestionNum').textContent = quizQuestions.length;
    document.getElementById('currentQuizIDDisplay').textContent = currentQuizId.toUpperCase();

    showSection('viewQuiz');
    renderQuestion();
    startTimer();
}

function startTimer() {
    let timeLeft = TOTAL_SECONDS;
    const display = document.getElementById('timerDisplay');

    if (timerInterval) clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        timeLeft--;

        const m = Math.floor(timeLeft / 60);
        const s = timeLeft % 60;
        display.textContent = `剩余时间: ${m}:${s.toString().padStart(2, '0')}`;

        // Visual alert (less than 3 minutes)
        if (timeLeft <= 180) {
            display.style.color = '#ef4444';
            display.style.fontWeight = '700';
        } else {
            display.style.color = '';
            display.style.fontWeight = '';
        }

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert('考试时间已到，系统将自动提交。');
            submitQuiz();
        }
    }, 1000);
}

/**
 * Fisher-Yates Shuffle
 */
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function renderQuestion() {
    const q = quizQuestions[currentIndex];
    const elements = {
        progressBar: document.getElementById('progressBar'),
        currNum: document.getElementById('currentQuestionNum'),
        qText: document.getElementById('questionText'),
        optionsList: document.getElementById('optionsList'),
        btnNext: document.getElementById('btnNext'),
        btnPrev: document.getElementById('btnPrev')
    };

    // UI: Add type indicator
    const typeLabel = q.type === 'multiple' ? '<span style="color:var(--secondary-color); font-size:0.8rem;">[多选题] </span>' : '<span style="color:var(--primary-color); font-size:0.8rem;">[单选题] </span>';
    elements.qText.innerHTML = `${typeLabel}${currentIndex + 1}. ${q.question}`;

    elements.optionsList.innerHTML = '';
    elements.progressBar.style.width = `${((currentIndex + 1) / quizQuestions.length) * 100}%`;
    elements.currNum.textContent = currentIndex + 1;

    q.options.forEach(opt => {
        const btn = document.createElement('div');
        btn.className = 'option-item';

        const optLetter = opt[0];
        const currentAnswer = userAnswers[currentIndex] || "";

        // Handle selection state
        if (q.type === 'multiple') {
            if (currentAnswer.includes(optLetter)) btn.classList.add('selected');
        } else {
            if (currentAnswer === optLetter) btn.classList.add('selected');
        }

        btn.textContent = opt;
        btn.onclick = () => {
            if (q.type === 'multiple') {
                let answers = currentAnswer.split('').filter(a => a);
                if (answers.includes(optLetter)) {
                    answers = answers.filter(a => a !== optLetter);
                } else {
                    answers.push(optLetter);
                }
                userAnswers[currentIndex] = answers.sort().join('');
            } else {
                userAnswers[currentIndex] = optLetter;
            }
            renderQuestion();
            elements.btnNext.disabled = (userAnswers[currentIndex] || "").length === 0;
        };
        elements.optionsList.appendChild(btn);
    });

    // Navigation buttons logic
    elements.btnPrev.style.display = currentIndex > 0 ? 'inline-block' : 'none';
    elements.btnPrev.onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderQuestion();
        }
    };

    elements.btnNext.textContent = currentIndex === quizQuestions.length - 1 ? '提交测验' : '下一题';
    elements.btnNext.disabled = (userAnswers[currentIndex] || "").length === 0;
    elements.btnNext.onclick = () => {
        if (currentIndex < quizQuestions.length - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            if (confirm('确认提交吗？提交后将无法修改答案。')) {
                submitQuiz();
            }
        }
    };
}

async function submitQuiz() {
    if (timerInterval) clearInterval(timerInterval);

    const submitTime = Date.now();
    const duration = Math.floor((submitTime - startTime) / 1000);
    let score = 0;

    const details = quizQuestions.map((q, i) => {
        const userChoice = userAnswers[i] || "";
        const isCorrect = userChoice === q.answer;
        if (isCorrect) score += 10;
        return { q_id: q.id, type: q.type, user_choice: userChoice, correct_answer: q.answer, is_correct: isCorrect };
    });

    // Payload matches verified MinApp schema
    const payload = {
        quiz_id: currentQuizId,
        student_id: currentUser.id,
        student_name: currentUser.name,
        score: score,
        start_time: new Date(startTime).toISOString(),
        duration: duration,
        submit_time: new Date(submitTime).toISOString(),
        switch_count: String(switchCount),
        details: JSON.stringify(details),
        options: JSON.stringify(quizQuestions.map(q => q.options))
    };

    showModal('submitting');
    try {
        console.log('🚀 Starting Submission with payload:', payload);

        // 1. MinApp Task (Production Proxy Path)
        const minAppTask = (async () => {
            try {
                const headers = { 'Content-Type': 'application/json' };

                // Get token from SDK if available
                if (typeof BaaS !== 'undefined') {
                    try {
                        // BaaS SDK 3.x uses getAuthToken() which is asynchronous
                        const token = await BaaS.getAuthToken();
                        if (token) {
                            headers['Authorization'] = `Hydrogen-r1 ${token}`;
                        } else {
                            console.warn('⚠️ No MinApp token found. Proxy might return 401.');
                        }
                    } catch (e) {
                        console.error('❌ Failed to get MinApp token:', e);
                    }
                }

                const res = await fetch('/api/report_minapp', {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(payload)
                });

                let data;
                const contentType = res.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    data = await res.json();
                } else {
                    const text = await res.text();
                    data = { error: text || 'Empty response' };
                }

                if (res.ok) {
                    console.log('✅ MinApp Success:', data);
                    return data;
                }
                throw new Error(data.error || `Server Error (${res.status})`);
            } catch (err) {
                console.error('❌ MinApp Failed:', err.message);
                throw err;
            }
        })();

        // 2. Google Sheet Task (Production Path)
        const sheetTask = (async () => {
            try {
                const res = await fetch('/api/submit', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                if (res.ok) {
                    const json = await res.json();
                    console.log('✅ Google Sheet Success:', json);
                    return json;
                }
                const text = await res.text();
                throw new Error(`Google Sheet: ${res.status} - ${text}`);
            } catch (err) {
                console.error('❌ Google Sheet Failed:', err.message);
                throw err;
            }
        })();

        // Use allSettled to ensure both backends are attempted
        const results = await Promise.allSettled([minAppTask, sheetTask]);
        console.log('📊 Submission Results:', results);

        const minAppSuccess = results[0].status === 'fulfilled';
        const sheetSuccess = results[1].status === 'fulfilled';

        if (!minAppSuccess && !sheetSuccess) {
            throw new Error('All submission backends failed.');
        }

        if (!minAppSuccess) {
            console.warn('⚠️ MinApp submission failed, but Google Sheet succeeded. proceeding.');
        }

        if (!sheetSuccess) {
            console.warn('⚠️ Google Sheet submission failed, but MinApp succeeded. proceeding.');
        }

        if (typeof localStorage !== 'undefined') {
            localStorage.setItem(`completed_${currentQuizId}_${currentUser.id}`, 'true');
        }

        document.getElementById('finalScore').textContent = score;

        // Show Retake button if reset code exists
        const retakeContainer = document.getElementById('retakeContainer');
        if (retakeContainer) {
            retakeContainer.style.display = (currentQuiz.resetCode) ? 'block' : 'none';
        }

        showModal('success');
    } catch (err) {
        console.error('🔥 CRITICAL SUBMIT ERROR:', err);
        const failureTitle = document.querySelector('#failureState h2');
        if (failureTitle) failureTitle.textContent = `提交失败: ${err.message}`;
        showModal('failure');
    }
}

function showModal(state) {
    const modal = document.getElementById('resultModal');
    if (!modal) return;
    modal.classList.add('active');
    ['submittingState', 'successState', 'failureState'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = (id === state + 'State') ? 'block' : 'none';
    });
}

window.retrySubmit = submitQuiz;
