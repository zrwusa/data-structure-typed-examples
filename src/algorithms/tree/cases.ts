import {TreeNode} from '../../types';

export const treeData: TreeNode<number> = new TreeNode('1', '1', 0, [
    new TreeNode('1-1', '2', 0, [
            new TreeNode('1-1-1', '3', 0, [
                    new TreeNode('1-1-1-1', '4'),
                    new TreeNode('1-1-1-2', '5', 0, []
                    )
                ]
            ),
            new TreeNode('1-1-2', '4', 0, [
                    new TreeNode('1-1-2-1', '6'),
                    new TreeNode('1-1-2-2', '7')
                ]
            )
        ]
    ),
    new TreeNode('1-2', '8', 0, [
            new TreeNode('1-2-1', '9', 0, [
                    new TreeNode('1-2-1-1', '10'),
                    new TreeNode('1-2-1-2', '11')
                ]
            ),
            new TreeNode('1-2-2', '12', 0, [
                    new TreeNode('1-2-2-1', '13'),
                    new TreeNode('1-2-2-2', '14', 0, [
                            new TreeNode('1-2-2-2-1', '15')
                        ]
                    )
                ]
            )
        ]
    )
]);

export const updateMatrixCase1: [number[][]] = [[[0], [0], [0], [0], [0]]];
export const updateMatrixCase2: [number[][]] = [[[0, 0, 0], [0, 1, 0], [0, 0, 0]]];
export const updateMatrixCase3: [number[][]] = [[[0, 0, 0], [0, 1, 0], [1, 1, 1]]];
export const updateMatrixCase4: [number[][]] = [[[1, 0, 1, 1, 0, 0, 1, 0, 0, 1], [0, 1, 1, 0, 1, 0, 1, 0, 1, 1], [0, 0, 1, 0, 1, 0, 0, 1, 0, 0], [1, 0, 1, 0, 1, 1, 1, 1, 1, 1], [0, 1, 0, 1, 1, 0, 0, 0, 0, 1], [0, 0, 1, 0, 1, 1, 1, 0, 1, 0], [0, 1, 0, 1, 0, 1, 0, 0, 1, 1], [1, 0, 0, 0, 1, 1, 1, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0, 1, 0], [1, 1, 1, 1, 0, 1, 0, 0, 1, 1]]];

export const ladderLengthCase1: [string, string, string[]] = ['a', 'b', ['a', 'b', 'c']];
export const ladderLengthCase2: [string, string, string[]] = ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']];
export const ladderLengthCase3: [string, string, string[]] = ['qa', 'sq', ['si', 'go', 'se', 'cm', 'so', 'ph', 'mt', 'db', 'mb', 'sb', 'kr', 'ln', 'tm', 'le', 'ti', 'ba', 'to', 'ra', 'fa', 'yo', 'ow', 'sn', 'ya', 'cr', 'po', 'he', 'lr', 'sq', 'ye']];
export const ladderLengthCase4: [string, string, string[]] = ['catch', 'choir', ['tours', 'awake', 'goats', 'crape', 'boron', 'payee', 'waken', 'cares', 'times', 'piled', 'maces', 'cuter', 'spied', 'spare', 'mouse', 'minty', 'theed', 'sprat', 'veins', 'brian', 'crown', 'years', 'drone', 'froth', 'foggy', 'laura', 'sears', 'shunt', 'gaunt', 'hovel', 'staff', 'child', 'arson', 'haber', 'knows', 'rubes', 'czars', 'pawed', 'whine', 'treed', 'bauer', 'jodie', 'timed', 'flits', 'robby', 'gooks', 'yawls', 'purse', 'veeps', 'tints', 'taped', 'raced', 'shaft', 'modes', 'dykes', 'slims', 'parts', 'emile', 'frail', 'salem', 'jives', 'heave', 'bayer', 'leech', 'clipt', 'yanks', 'wilds', 'hikes', 'cilia', 'spiel', 'mulls', 'fetal', 'homed', 'drown', 'suite', 'defer', 'oaken', 'flail', 'zippy', 'burke', 'slued', 'mowed', 'manes', 'verse', 'serra', 'bruno', 'spoke', 'mikes', 'hafts', 'breed', 'sully', 'croce', 'boers', 'chair', 'thong', 'pulse', 'pasta', 'perot', 'fices', 'shies', 'nadir', 'every', 'diets', 'roads', 'cones', 'tuned', 'globs', 'graft', 'stall', 'royal', 'fixes', 'north', 'pikes', 'slack', 'vests', 'quart', 'crawl', 'tangs', 'calks', 'mayor', 'filmy', 'barns', 'block', 'hoods', 'storm', 'cedes', 'emote', 'tacks', 'skirt', 'horsy', 'mawed', 'moray', 'wring', 'munch', 'hewed', 'hooke', 'batch', 'drawl', 'berth', 'sport', 'welch', 'jeans', 'river', 'tabby', 'amens', 'stump', 'cause', 'maced', 'hiker', 'spays', 'dusty', 'trail', 'acorn', 'zooms', 'puked', 'clown', 'sands', 'kelli', 'stein', 'rawer', 'water', 'dolts', 'momma', 'fluky', 'scots', 'pupil', 'halls', 'toady', 'pored', 'latch', 'shags', 'union', 'tamps', 'stead', 'ryder', 'knoll', 'cacao', 'damns', 'charm', 'frank', 'draws', 'gowns', 'risen', 'saxes', 'lucks', 'avert', 'yolks', 'clime', 'wedge', 'ruses', 'famed', 'sabik', 'gravy', 'anion', 'veils', 'pyres', 'raspy', 'lofts', 'tress', 'showy', 'percy', 'rices', 'taker', 'roger', 'yeats', 'baked', 'ayers', 'fazes', 'curly', 'shawn', 'clare', 'paine', 'ranks', 'hocks', 'berta', 'plays', 'parks', 'tacos', 'onion', 'skeet', 'acton', 'lamer', 'teals', 'reset', 'steal', 'maven', 'sored', 'fecal', 'harsh', 'totem', 'swoop', 'rough', 'jokes', 'mires', 'weird', 'quits', 'damps', 'touts', 'fling', 'sarah', 'peeps', 'waxen', 'traps', 'mange', 'swell', 'swoon', 'catch', 'mower', 'bonny', 'finds', 'yards', 'pleas', 'filed', 'smelt', 'drams', 'vivid', 'smirk', 'whigs', 'loafs', 'opens', 'meter', 'hakes', 'berms', 'whack', 'donny', 'faint', 'peace', 'libby', 'yates', 'purer', 'wants', 'brace', 'razed', 'emend', 'bards', 'karyn', 'japed', 'fated', 'missy', 'punks', 'humps', 'steak', 'depth', 'brunt', 'hauls', 'craws', 'blast', 'broom', 'tones', 'ousts', 'wires', 'peeks', 'ruffs', 'crack', 'monte', 'worth', 'spans', 'tonic', 'runny', 'erick', 'singe', 'maine', 'casts', 'jello', 'realm', 'haste', 'utter', 'bleat', 'kasey', 'palms', 'solos', 'hoagy', 'sweep', 'loner', 'naves', 'rhine', 'acmes', 'cadet', 'dices', 'saris', 'mauro', 'fifty', 'prows', 'karat', 'dowel', 'frays', 'shorn', 'sails', 'ticks', 'train', 'stars', 'stork', 'halts', 'basal', 'glops', 'beset', 'rifer', 'layla', 'lathe', 'daffy', 'jinns', 'snide', 'groin', 'kelly', 'zincs', 'fryer', 'quilt', 'drama', 'shook', 'swami', 'hulls', 'swazi', 'danes', 'axons', 'those', 'lorry', 'plath', 'prime', 'faces', 'crock', 'shake', 'borer', 'droop', 'derek', 'shirk', 'styed', 'frown', 'jells', 'slows', 'lifts', 'jeers', 'helms', 'turds', 'dross', 'tired', 'rimes', 'beats', 'dingo', 'crews', 'bides', 'loins', 'furry', 'shana', 'wises', 'logos', 'aural', 'light', 'pings', 'belch', 'campy', 'swish', 'sangs', 'nerds', 'boggy', 'skies', 'weals', 'snags', 'joyed', 'mamet', 'miser', 'leaks', 'ramos', 'tract', 'rends', 'marks', 'taunt', 'sissy', 'lipid', 'beach', 'coves', 'fates', 'grate', 'gloss', 'heros', 'sniff', 'verve', 'tells', 'bulge', 'grids', 'skein', 'clout', 'leaps', 'males', 'surfs', 'slips', 'grave', 'boats', 'tamed', 'muled', 'meier', 'lower', 'leafy', 'stool', 'reich', 'rider', 'iring', 'ginny', 'flaks', 'chirp', 'tonga', 'chest', 'ollie', 'foxes', 'links', 'alton', 'darth', 'drier', 'sated', 'rails', 'gyros', 'green', 'jenna', 'cures', 'veals', 'sense', 'sworn', 'roses', 'aides', 'loses', 'rival', 'david', 'worms', 'stand', 'track', 'dales', 'noyes', 'fraud', 'shock', 'sward', 'pluto', 'biked', 'roans', 'whiny', 'halve', 'bunts', 'spilt', 'gamey', 'deeds', 'oozed', 'ruder', 'drano', 'sages', 'fewer', 'maize', 'aimed', 'bails', 'poole', 'hunts', 'shari', 'champ', 'shuns', 'jonah', 'faced', 'spook', 'harry', 'lagos', 'peale', 'nacho', 'saint', 'power', 'chaff', 'shard', 'cocky', 'irate', 'tummy', 'withe', 'forks', 'bates', 'stuns', 'turfs', 'coped', 'coups', 'vince', 'helps', 'facet', 'fezes', 'outer', 'cheek', 'tried', 'sumps', 'fakes', 'fonds', 'yearn', 'brays', 'flute', 'fetid', 'beyer', 'mamma', 'topic', 'bouts', 'trend', 'gorey', 'hills', 'swaps', 'sexes', 'cindy', 'ruler', 'kited', 'gaits', 'shank', 'cloys', 'stuck', 'purus', 'musks', 'gouge', 'brake', 'biker', 'layer', 'lilly', 'bills', 'seven', 'flyer', 'phase', 'wowed', 'beaus', 'cokes', 'chimp', 'spats', 'mooch', 'dried', 'hulks', 'shift', 'galen', 'wiped', 'clops', 'decal', 'nopes', 'huffs', 'lades', 'sunny', 'foyer', 'gusty', 'wormy', 'chips', 'focus', 'pails', 'solid', 'ariel', 'gamed', 'diver', 'vying', 'sacks', 'spout', 'sides', 'agave', 'bandy', 'scant', 'coils', 'marci', 'marne', 'swank', 'basil', 'shine', 'nines', 'clues', 'fuzes', 'jacks', 'robin', 'pyxes', 'later', 'silas', 'napes', 'homes', 'baled', 'dames', 'abuse', 'piker', 'coots', 'tiles', 'bents', 'pearl', 'booty', 'hells', 'dusky', 'glare', 'scale', 'pales', 'leary', 'scull', 'bimbo', 'mossy', 'apron', 'manet', 'opted', 'kusch', 'shiny', 'argos', 'hoped', 'towns', 'bilbo', 'slums', 'skull', 'shale', 'mandy', 'scows', 'speed', 'eager', 'lards', 'crows', 'merry', 'anted', 'faxed', 'leave', 'fargo', 'creek', 'comas', 'golda', 'baize', 'easts', 'plied', 'rared', 'ashed', 'doted', 'bunin', 'bonds', 'yarns', 'latin', 'right', 'worst', 'sixes', 'gabby', 'begun', 'upend', 'giant', 'tykes', 'creak', 'manor', 'bosom', 'riced', 'dimly', 'holes', 'stunt', 'parsi', 'peers', 'snell', 'mates', 'jules', 'rusty', 'myles', 'yules', 'sades', 'hobbs', 'booth', 'clean', 'liven', 'gamer', 'howdy', 'stray', 'riser', 'wisps', 'lubes', 'tubes', 'rodeo', 'bigot', 'tromp', 'pimps', 'reeve', 'pumps', 'dined', 'still', 'terms', 'hines', 'purrs', 'roast', 'dooms', 'lints', 'sells', 'swims', 'happy', 'spank', 'inset', 'meany', 'bobby', 'works', 'place', 'brook', 'haded', 'chide', 'slime', 'clair', 'zeros', 'britt', 'screw', 'ducal', 'wroth', 'edger', 'basie', 'benin', 'unset', 'shade', 'doers', 'plank', 'betsy', 'bryce', 'cross', 'roped', 'weans', 'bliss', 'moist', 'corps', 'clara', 'notch', 'sheep', 'weepy', 'bract', 'diced', 'carla', 'locks', 'sawed', 'covey', 'jocks', 'large', 'pasts', 'bumps', 'stile', 'stole', 'slung', 'mooed', 'souls', 'dupes', 'fairs', 'lined', 'tunis', 'spelt', 'joked', 'wacky', 'moira', 'strut', 'soled', 'pints', 'axing', 'drank', 'weary', 'coifs', 'wills', 'gibes', 'ceded', 'gerry', 'tires', 'crazy', 'tying', 'sites', 'trust', 'dover', 'bolds', 'tools', 'latex', 'capet', 'lanky', 'grins', 'brood', 'hitch', 'perts', 'dozes', 'keels', 'vault', 'laius', 'chung', 'deres', 'glove', 'corms', 'wafer', 'coons', 'ponce', 'tumid', 'spinx', 'verge', 'soggy', 'fleas', 'middy', 'saiph', 'payer', 'nukes', 'click', 'limps', 'oared', 'white', 'chart', 'nasty', 'perth', 'paddy', 'elisa', 'owing', 'gifts', 'manna', 'ofter', 'paley', 'fores', 'sough', 'wanda', 'doggy', 'antic', 'ester', 'swath', 'spoon', 'lamas', 'meuse', 'hotel', 'weedy', 'quads', 'paled', 'blond', 'flume', 'pried', 'rates', 'petal', 'rover', 'marsh', 'grief', 'downy', 'pools', 'buffs', 'dunne', 'cruel', 'finny', 'cosby', 'patch', 'polly', 'jerks', 'linen', 'cider', 'visas', 'beard', 'mewed', 'spill', 'trots', 'tares', 'pured', 'prior', 'build', 'throe', 'wends', 'baned', 'mario', 'misty', 'golds', 'lacey', 'slags', 'jived', 'finis', 'inner', 'money', 'skews', 'sunks', 'fined', 'bauds', 'lapel', 'class', 'berne', 'rabin', 'roils', 'hyped', 'styes', 'evans', 'towed', 'hawed', 'allow', 'modal', 'ports', 'erich', 'rills', 'humid', 'hooks', 'sedge', 'shirt', 'nippy', 'fundy', 'runes', 'smile', 'dolly', 'tisha', 'byers', 'goths', 'sousa', 'mimed', 'welts', 'hoots', 'shown', 'winds', 'drays', 'slams', 'susan', 'frogs', 'peach', 'goody', 'boned', 'chewy', 'eliza', 'peary', 'pyxed', 'tiled', 'homer', 'tokes', 'verdi', 'mabel', 'rolls', 'laden', 'loxed', 'phony', 'woods', 'brine', 'rooks', 'moods', 'hired', 'sises', 'close', 'slops', 'tined', 'creel', 'hindu', 'gongs', 'wanes', 'drips', 'belly', 'leger', 'demon', 'sills', 'chevy', 'brads', 'drawn', 'donna', 'glean', 'dying', 'sassy', 'gives', 'hazes', 'cores', 'kayla', 'hurst', 'wheat', 'wiled', 'vibes', 'kerry', 'spiny', 'wears', 'rants', 'sizer', 'asses', 'duked', 'spews', 'aired', 'merak', 'lousy', 'spurt', 'reeds', 'dared', 'paged', 'prong', 'deere', 'clogs', 'brier', 'becks', 'taken', 'boxes', 'wanna', 'corny', 'races', 'spuds', 'jowls', 'mucks', 'milch', 'weest', 'slick', 'nouns', 'alley', 'bight', 'paper', 'lamps', 'trace', 'types', 'sloop', 'devon', 'pedal', 'glint', 'gawky', 'eaves', 'herbs', 'felts', 'fills', 'naval', 'icing', 'eking', 'lauds', 'stats', 'kills', 'vends', 'capes', 'chary', 'belle', 'moats', 'fonts', 'teems', 'wards', 'bated', 'fleet', 'renal', 'sleds', 'gases', 'loony', 'paced', 'holst', 'seeds', 'curie', 'joist', 'swill', 'seats', 'lynda', 'tasks', 'colts', 'shops', 'toted', 'nuder', 'sachs', 'warts', 'pupal', 'scalp', 'heirs', 'wilma', 'pansy', 'berra', 'keeps', 'menus', 'grams', 'loots', 'heels', 'caste', 'hypes', 'start', 'snout', 'nixes', 'nests', 'grand', 'tines', 'vista', 'copes', 'ellis', 'narks', 'feint', 'lajos', 'brady', 'barry', 'trips', 'forth', 'sales', 'bests', 'hears', 'twain', 'plaid', 'hated', 'kraft', 'fared', 'cubit', 'jayne', 'heats', 'chums', 'pangs', 'glows', 'lopez', 'vesta', 'garbo', 'ethel', 'blood', 'roams', 'mealy', 'clunk', 'rowed', 'hacks', 'davit', 'plane', 'fuses', 'clung', 'fitch', 'serer', 'wives', 'lully', 'clans', 'kinks', 'spots', 'nooks', 'plate', 'knits', 'greet', 'loads', 'manic', 'scone', 'darin', 'pills', 'earth', 'gored', 'socks', 'fauna', 'ditch', 'wakes', 'savvy', 'quiet', 'nulls', 'sizes', 'diana', 'mayan', 'velds', 'dines', 'punch', 'bales', 'sykes', 'spiky', 'hover', 'teats', 'lusts', 'ricky', 'think', 'culls', 'bribe', 'pairs', 'month', 'cored', 'packs', 'lobes', 'older', 'hefts', 'faxes', 'cased', 'swain', 'bawdy', 'troop', 'woven', 'stomp', 'swags', 'beads', 'check', 'shill', 'broad', 'souse', 'pouch', 'lived', 'iambs', 'teaks', 'clams', 'outed', 'maxed', 'plain', 'sappy', 'cabal', 'penal', 'shame', 'budge', 'offed', 'kooks', 'gybed', 'basin', 'thoth', 'arced', 'hypos', 'flows', 'fetch', 'needs', 'davis', 'jared', 'bongo', 'added', 'sames', 'randy', 'tunes', 'jamar', 'smash', 'blows', 'grows', 'palmy', 'miler', 'chins', 'viola', 'tower', 'cream', 'molls', 'cello', 'sucks', 'fears', 'stone', 'leans', 'zions', 'nutty', 'tasha', 'ratty', 'tenet', 'raven', 'coast', 'roods', 'mixes', 'kmart', 'looms', 'scram', 'chapt', 'lites', 'trent', 'baron', 'rasps', 'ringo', 'fazed', 'thank', 'masts', 'trawl', 'softy', 'toils', 'romes', 'norma', 'teens', 'blank', 'chili', 'anise', 'truss', 'cheat', 'tithe', 'lawns', 'reese', 'slash', 'prate', 'comet', 'runts', 'shall', 'hosed', 'harpy', 'dikes', 'knock', 'strip', 'boded', 'tough', 'spend', 'coats', 'husky', 'tyree', 'menes', 'liver', 'coins', 'axles', 'macho', 'jawed', 'weeps', 'goods', 'pryor', 'carts', 'dumps', 'posts', 'donor', 'daunt', 'limbo', 'books', 'bowls', 'welds', 'leper', 'benny', 'couch', 'spell', 'burst', 'elvin', 'limbs', 'regal', 'loyal', 'gaily', 'blade', 'wheal', 'zests', 'seine', 'hubby', 'sheen', 'tapes', 'slugs', 'bench', 'lungs', 'pipes', 'bride', 'selma', 'berry', 'burns', 'skins', 'bowen', 'gills', 'conan', 'yucky', 'gauls', 'voled', 'crust', 'jerky', 'moans', 'plump', 'sided', 'disks', 'gleam', 'larry', 'billy', 'aloud', 'match', 'udder', 'rises', 'wryer', 'deter', 'cling', 'brisk', 'lever', 'chaps', 'tansy', 'gland', 'rocky', 'lists', 'joins', 'tubed', 'react', 'farsi', 'dopes', 'chats', 'olsen', 'stern', 'gully', 'youth', 'wiles', 'slink', 'cooke', 'arise', 'bores', 'maims', 'danny', 'rives', 'rusts', 'plots', 'loxes', 'troys', 'cleat', 'waxes', 'booze', 'haven', 'dilly', 'shaun', 'gasps', 'rains', 'panda', 'quips', 'kings', 'frets', 'backs', 'arabs', 'rhino', 'beets', 'fiber', 'duffy', 'parry', 'sever', 'hunks', 'cheap', 'beeps', 'fifes', 'deers', 'purls', 'hello', 'wolfs', 'stays', 'lands', 'hawks', 'feels', 'swiss', 'tyros', 'nerve', 'stirs', 'mixed', 'tombs', 'saves', 'cater', 'studs', 'dorky', 'cinch', 'spice', 'shady', 'elder', 'plato', 'hairs', 'newts', 'slump', 'boots', 'lives', 'walls', 'spunk', 'bucks', 'mined', 'parch', 'disco', 'newel', 'doris', 'glues', 'brawn', 'abner', 'piked', 'laxes', 'bulky', 'moran', 'cozen', 'tinge', 'dowry', 'snare', 'sagan', 'harms', 'burch', 'plows', 'sunni', 'fades', 'coach', 'girls', 'typed', 'slush', 'saver', 'bulls', 'grass', 'holed', 'coven', 'dukes', 'ocher', 'texan', 'cakes', 'gilts', 'jenny', 'salon', 'divas', 'maris', 'costs', 'sulla', 'lends', 'gushy', 'pears', 'teddy', 'huffy', 'sited', 'rhone', 'euler', 'solve', 'grace', 'snarl', 'taste', 'sally', 'allay', 'suers', 'bogey', 'pooch', 'songs', 'cameo', 'molts', 'snipe', 'cargo', 'forge', 'reins', 'hoses', 'crams', 'fines', 'tings', 'wings', 'spoor', 'twice', 'waxed', 'mixer', 'bongs', 'stung', 'gages', 'yelps', 'croci', 'corks', 'bolls', 'madge', 'honer', 'riled', 'camus', 'trick', 'bowed', 'overt', 'steed', 'ripes', 'stave', 'crick', 'great', 'scott', 'scald', 'point', 'finch', 'bulks', 'chant', 'kiddo', 'cover', 'drunk', 'sered', 'dicky', 'wider', 'saith', 'mutts', 'blind', 'lyres', 'sized', 'darby', 'rebel', 'zones', 'title', 'yawns', 'laths', 'sting', 'taine', 'paris', 'route', 'livia', 'roots', 'belay', 'daubs', 'spoof', 'camel', 'colds', 'foist', 'saned', 'doles', 'slays', 'woody', 'leads', 'stout', 'caper', 'erika', 'lance', 'earns', 'vines', 'mercy', 'antis', 'terri', 'messy', 'lords', 'shims', 'serfs', 'jinni', 'caged', 'threw', 'rainy', 'bumpy', 'arias', 'wails', 'romeo', 'gorge', 'dolls', 'risks', 'skyed', 'fumes', 'payed', 'mites', 'choir', 'piles', 'scene', 'flake', 'solon', 'brahe', 'bikes', 'dawes', 'goofs', 'payne', 'cried', 'slavs', 'hives', 'snack', 'cribs', 'aways', 'fired', 'swarm', 'pumas', 'paved', 'smith', 'gooey', 'liefs', 'safer', 'banes', 'slake', 'doled', 'dummy', 'gazed', 'heaps', 'loped', 'scoff', 'crash', 'balmy', 'hexed', 'lunch', 'guide', 'loges', 'alien', 'rated', 'stabs', 'whets', 'blest', 'poops', 'cowls', 'canes', 'story', 'cunts', 'tusks', 'pinto', 'scats', 'flier', 'chose', 'brute', 'laked', 'swabs', 'preps', 'loose', 'merle', 'farms', 'gapes', 'lindy', 'share', 'floes', 'scary', 'bungs', 'smart', 'craps', 'curbs', 'vices', 'tally', 'beret', 'lenny', 'waked', 'brats', 'carpi', 'night', 'junes', 'signs', 'karla', 'dowdy', 'devil', 'toned', 'araby', 'trait', 'puffy', 'dimer', 'honor', 'moose', 'synch', 'murks', 'doric', 'muted', 'quite', 'sedan', 'snort', 'rumps', 'teary', 'heard', 'slice', 'alter', 'barer', 'whole', 'steep', 'catty', 'bidet', 'bayes', 'suits', 'dunes', 'jades', 'colin', 'ferry', 'blown', 'bryon', 'sways', 'bayed', 'fairy', 'bevel', 'pined', 'stoop', 'smear', 'mitty', 'sanes', 'riggs', 'order', 'palsy', 'reels', 'talon', 'cools', 'retch', 'olive', 'dotty', 'nanny', 'surat', 'gross', 'rafts', 'broth', 'mewls', 'craze', 'nerdy', 'barfs', 'johns', 'brims', 'surer', 'carve', 'beers', 'baker', 'deena', 'shows', 'fumed', 'horde', 'kicky', 'wrapt', 'waits', 'shane', 'buffy', 'lurks', 'treat', 'savor', 'wiper', 'bided', 'funny', 'dairy', 'wispy', 'flees', 'midge', 'hooch', 'sired', 'brett', 'putty', 'caked', 'witch', 'rearm', 'stubs', 'putts', 'chase', 'jesus', 'posed', 'dates', 'dosed', 'yawed', 'wombs', 'idles', 'hmong', 'sofas', 'capek', 'goner', 'musts', 'tangy', 'cheer', 'sinks', 'fatal', 'rubin', 'wrest', 'crank', 'bared', 'zilch', 'bunny', 'islet', 'spies', 'spent', 'filth', 'docks', 'notes', 'gripe', 'flair', 'quire', 'snuck', 'foray', 'cooks', 'godly', 'dorms', 'silos', 'camps', 'mumps', 'spins', 'cites', 'sulky', 'stink', 'strap', 'fists', 'tends', 'adobe', 'vivas', 'sulks', 'hasps', 'poser', 'bethe', 'sudan', 'faust', 'bused', 'plume', 'yoked', 'silly', 'wades', 'relay', 'brent', 'cower', 'sasha', 'staci', 'haves', 'dumbs', 'based', 'loser', 'genes', 'grape', 'lilia', 'acted', 'steel', 'award', 'mares', 'crabs', 'rocks', 'lines', 'margo', 'blahs', 'honda', 'rides', 'spine', 'taxed', 'salty', 'eater', 'bland', 'sweat', 'sores', 'ovens', 'stash', 'token', 'drink', 'swans', 'heine', 'gents', 'reads', 'piers', 'yowls', 'risky', 'tided', 'blips', 'myths', 'cline', 'tiers', 'racer', 'limed', 'poled', 'sluts', 'chump', 'greek', 'wines', 'mangy', 'fools', 'bands', 'smock', 'prowl', 'china', 'prove', 'oases', 'gilda', 'brews', 'sandy', 'leers', 'watch', 'tango', 'keven', 'banns', 'wefts', 'crass', 'cloud', 'hunch', 'cluck', 'reams', 'comic', 'spool', 'becky', 'grown', 'spike', 'lingo', 'tease', 'fixed', 'linda', 'bleep', 'funky', 'fanny', 'curve', 'josie', 'minds', 'musty', 'toxin', 'drags', 'coors', 'dears', 'beams', 'wooer', 'dells', 'brave', 'drake', 'merge', 'hippo', 'lodge', 'taper', 'roles', 'plums', 'dandy', 'harps', 'lutes', 'fails', 'navel', 'lyons', 'magic', 'walks', 'sonic', 'voles', 'raped', 'stamp', 'minus', 'hazel', 'clods', 'tiffs', 'hayed', 'rajah', 'pared', 'hates', 'makes', 'hinds', 'splay', 'flags', 'tempe', 'waifs', 'roved', 'dills', 'jonas', 'avers', 'balds', 'balks', 'perms', 'dully', 'lithe', 'aisha', 'witty', 'ellie', 'dived', 'range', 'lefty', 'wined', 'booby', 'decor', 'jaded', 'knobs', 'roded', 'moots', 'whens', 'valet', 'talks', 'blare', 'heeds', 'cuing', 'needy', 'knees', 'broke', 'bored', 'henna', 'rages', 'vises', 'perch', 'laded', 'emily', 'spark', 'tracy', 'tevet', 'faith', 'sweet', 'grays', 'teams', 'adder', 'miffs', 'tubae', 'marin', 'folds', 'basis', 'drugs', 'prick', 'tucks', 'fifth', 'treks', 'taney', 'romps', 'jerry', 'bulgy', 'anton', 'codes', 'bones', 'quota', 'turns', 'melts', 'croat', 'woken', 'wried', 'leash', 'spacy', 'bless', 'lager', 'rakes', 'pukes', 'cushy', 'silks', 'auden', 'dotes', 'hinge', 'noisy', 'coked', 'hiked', 'garth', 'natty', 'novel', 'peeve', 'macaw', 'sloth', 'warns', 'soles', 'lobed', 'aimee', 'toads', 'plugs', 'chasm', 'pries', 'douse', 'ruled', 'venus', 'robes', 'aglow', 'waves', 'swore', 'strum', 'stael', 'seeps', 'snots', 'freed', 'truck', 'hilly', 'fixer', 'rarer', 'rhyme', 'smugs', 'demos', 'ships', 'piped', 'jumpy', 'grant', 'dirty', 'climb', 'quell', 'pulps', 'puers', 'comte', 'kirks', 'waver', 'fever', 'swear', 'straw', 'serum', 'cowed', 'blent', 'yuppy', 'ropes', 'conks', 'boozy', 'feeds', 'japes', 'auger', 'noons', 'wench', 'tasty', 'honed', 'balms', 'trams', 'pasha', 'mummy', 'tides', 'shove', 'shyer', 'trope', 'clash', 'promo', 'harem', 'never', 'humus', 'burks', 'plans', 'tempi', 'crude', 'vocal', 'lames', 'guppy', 'crime', 'cough', 'rural', 'break', 'codex', 'baggy', 'camry', 'muses', 'exile', 'harte', 'evens', 'uriel', 'bombs', 'wrens', 'goren', 'clark', 'groom', 'tinny', 'alias', 'irwin', 'ruddy', 'twins', 'rears', 'ogden', 'joker', 'shaky', 'sodas', 'larch', 'lelia', 'longs', 'leeds', 'store', 'scars', 'plush', 'speck', 'lamar', 'baser', 'geeky', 'wilda', 'sonny', 'gummy', 'porch', 'grain', 'testy', 'wreck', 'spurs', 'belie', 'ached', 'vapid', 'chaos', 'brice', 'finks', 'lamed', 'prize', 'tsars', 'drubs', 'direr', 'shelf', 'ceres', 'swops', 'weirs', 'vader', 'benet', 'gurus', 'boors', 'mucky', 'gilds', 'pride', 'angus', 'hutch', 'vance', 'candy', 'pesky', 'favor', 'glenn', 'denim', 'mines', 'frump', 'surge', 'burro', 'gated', 'badge', 'snore', 'fires', 'omens', 'sicks', 'built', 'baits', 'crate', 'nifty', 'laser', 'fords', 'kneel', 'louse', 'earls', 'greed', 'miked', 'tunic', 'takes', 'align', 'robed', 'acres', 'least', 'sleek', 'motes', 'hales', 'idled', 'faked', 'bunks', 'biped', 'sowed', 'lucky', 'grunt', 'clear', 'flops', 'grill', 'pinch', 'bodes', 'delta', 'lopes', 'booms', 'lifer', 'stunk', 'avery', 'wight', 'flaps', 'yokel', 'burgs', 'racks', 'claus', 'haled', 'nears', 'finns', 'chore', 'stove', 'dunce', 'boles', 'askew', 'timid', 'panic', 'words', 'soupy', 'perks', 'bilge', 'elias', 'crush', 'pagan', 'silts', 'clive', 'shuck', 'fulls', 'boner', 'claws', 'panza', 'blurb', 'soaks', 'skips', 'shape', 'yells', 'raved', 'poppy', 'lease', 'trued', 'minks', 'estes', 'aisle', 'penes', 'kathy', 'combo', 'viper', 'chops', 'blend', 'jolly', 'gimpy', 'burma', 'cohan', 'gazer', 'drums', 'gnaws', 'clone', 'drain', 'morns', 'wages', 'moths', 'slues', 'slobs', 'warps', 'brand', 'popes', 'triad', 'ounce', 'stilt', 'shins', 'greer', 'hodge', 'minos', 'tweed', 'sexed', 'alger', 'floss', 'timer', 'steve', 'birch', 'known', 'aryan', 'hedge', 'fully', 'jumps', 'bites', 'shots', 'curer', 'board', 'lenin', 'corns', 'dough', 'named', 'kinda', 'truce', 'games', 'lanes', 'suave', 'leann', 'pesos', 'masks', 'ghats', 'stows', 'mules', 'hexes', 'chuck', 'alden', 'aping', 'dives', 'thurs', 'nancy', 'kicks', 'gibed', 'burly', 'sager', 'filly', 'onset', 'anons', 'yokes', 'tryst', 'rangy', 'pours', 'rotes', 'hided', 'touch', 'shads', 'tonya', 'finer', 'moors', 'texas', 'shoot', 'tears', 'elope', 'tills']];
export const ladderLengthCase5: [string, string, string[]] = ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']];
export const ladderLengthCase6: [string, string, string[]] = ['hit', 'hif', ['fit', 'jit', 'iit', 'hft', 'hht', 'hft', 'hih', 'hiy', 'hif']];
export const ladderLengthCase7: [string, string, string[]] = ['leet', 'code', ['lest', 'leet', 'lose', 'code', 'lode', 'robe', 'lost']];

type CutOffTreeCase = [number[][]];
export const cutOffTreeCase1: CutOffTreeCase = [[[1, 2, 3], [0, 0, 4], [7, 6, 5]]];
export const cutOffTreeCase2: CutOffTreeCase = [[[1, 2, 3], [0, 0, 0], [7, 6, 5]]];
export const cutOffTreeCase3: CutOffTreeCase = [[[2, 3, 4], [0, 0, 5], [8, 7, 6]]];
export const cutOffTreeCase4: CutOffTreeCase = [[[1, 3, 0], [1, 1, 5], [1, 4, 1]]];
export const cutOffTreeCase5: CutOffTreeCase = [[[1, 3, 0], [0, 0, 5], [1, 4, 1]]];
export const cutOffTreeCase6: CutOffTreeCase = [[[69438, 55243, 0, 43779, 5241, 93591, 73380], [847, 49990, 53242, 21837, 89404, 63929, 48214], [90332, 49751, 0, 3088, 16374, 70121, 25385], [14694, 4338, 87873, 86281, 5204, 84169, 5024], [31711, 47313, 1885, 28332, 11646, 42583, 31460], [59845, 94855, 29286, 53221, 9803, 41305, 60749], [95077, 50343, 27947, 92852, 0, 0, 19731], [86158, 63553, 56822, 90251, 0, 23826, 17478], [60387, 23279, 78048, 78835, 5310, 99720, 0], [74799, 48845, 60658, 29773, 96129, 90443, 14391], [65448, 63358, 78089, 93914, 7931, 68804, 72633], [93431, 90868, 55280, 30860, 59354, 62083, 47669], [81064, 93220, 22386, 22341, 95485, 20696, 13436], [50083, 0, 89399, 43882, 0, 13593, 27847], [0, 12256, 33652, 69301, 73395, 93440, 0], [42818, 87197, 81249, 33936, 7027, 5744, 64710], [35843, 0, 99746, 52442, 17494, 49407, 63016], [86042, 44524, 0, 0, 26787, 97651, 28572], [54183, 83466, 96754, 89861, 84143, 13413, 72921], [89405, 52305, 39907, 27366, 14603, 0, 14104], [70909, 61104, 70236, 30365, 0, 30944, 98378], [20124, 87188, 6515, 98319, 78146, 99325, 88919], [89669, 0, 64218, 85795, 2449, 48939, 12869], [93539, 28909, 90973, 77642, 0, 72170, 98359], [88628, 16422, 80512, 0, 38651, 50854, 55768], [13639, 2889, 74835, 80416, 26051, 78859, 25721], [90182, 23154, 16586, 0, 27459, 3272, 84893], [2480, 33654, 87321, 93272, 93079, 0, 38394], [34676, 72427, 95024, 12240, 72012, 0, 57763], [97957, 56, 83817, 45472, 0, 24087, 90245], [32056, 0, 92049, 21380, 4980, 38458, 3490], [21509, 76628, 0, 90430, 10113, 76264, 45840], [97192, 58807, 74165, 65921, 45726, 47265, 56084], [16276, 27751, 37985, 47944, 54895, 80706, 2372], [28438, 53073, 0, 67255, 38416, 63354, 69262], [23926, 75497, 91347, 58436, 73946, 39565, 10841], [34372, 69647, 44093, 62680, 32424, 69858, 68719], [24425, 4014, 94871, 1031, 99852, 88692, 31503], [24475, 12295, 33326, 37771, 37883, 74568, 25163], [0, 18411, 88185, 60924, 29028, 69789, 0], [34697, 75631, 7636, 16190, 60178, 39082, 7052], [24876, 9570, 53630, 98605, 22331, 79320, 88317], [27204, 89103, 15221, 91346, 35428, 94251, 62745], [26636, 28759, 12998, 58412, 38113, 14678, 0], [80871, 79706, 45325, 3861, 12504, 0, 4872], [79662, 15626, 995, 80546, 64775, 0, 68820], [25160, 82123, 81706, 21494, 92958, 33594, 5243]]];
export const cutOffTreeCase7: CutOffTreeCase = [[[1, 1, 1, 2, 5], [1], [4, 1, 1], [0, 0, 3]]];
export const cutOffTreeCase8: CutOffTreeCase = [[[1, 1, 1, 1, 1, 1, 1, 1], [1, 0, 3, 1, 0, 4, 1], [0, 1, 1, 0, 1, 1], [2, 1, 0, 1, 0, 1], [1, 1, 1, 5, 1, 1]]];
export const cutOffTreeCase9: CutOffTreeCase = [[[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 2, 1]]];

type CombinationCase = [number[]];
export const combinationCase1: CombinationCase = [[1, 2, 3, 4, 5, 6, 7, 8]];
export const combinationCase2: CombinationCase = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]];

type PermutationCase = [number[]];
export const permutationCase1: PermutationCase = [[1, 2, 3, 4, 5, 6, 7, 8]];
export const permutationCase2: PermutationCase = [[1, 2, 3, 4, 5, 6, 7, 8, 9]];
