---
id: config
sidebar_label: "Config"
---

# Config
***

```yaml
# +----------------------------------------------------+ #
# <                    HCF+ Config                     > #
# <                     Created by                     > #
# <                    Idbi & Koba                     > #
# +----------------------------------------------------+ #

BungeeCord: false
Language:
# Sets the default language to the players.
  DefaultLanguage: en
Timezone:
# Sets the default timezone on the server. 
# Please use this website if you don''t understand the timezone format:
# https://code2care.org/pages/java-timezone-list-utc-gmt-offset
  Timezone: Europe/Budapest
Database:
# Selects the database service.
# Currently only ''mongodb'' and ''mysql'' available!
# Default: mongodb
  StorageMethod: mongodb
MySQL:
  MySQLHost: localhost
  MySQLPort: '3306'
  MySQLDatabase: hcfplus
  MySQLUsername: root
  MySQLPassword: ''
MongoDB:
# Paste the given link from the MongoDB website.
# Help: After creating a Cluster, click on the 'Connect button'.
# Paste the link, and replace the <password> field with your password.
  MongoDBURL: mongodb+srv://user:<password>@<cluster>/?retryWrites=true&w=majority
  MongoDBDatabase: HCFPlus
Cooldowns:
# Sets the enderpearl cooldown after thrown.
# Must be in seconds
  EnderPearl: 10
# This will be set if after joining, or respawning.
# Must be in seconds
  PvPTimer: 30
# This will be set if you are hit
# Must be in seconds
  CombatTag: 30
# This will be set if you are hit by an archer.
# Must be in seconds
  ArcherTag: 30
# This will be set if you eat a normal G apple
# Must be in seconds
  GolderApple: 30
# This will be set if you eat an Enchanted G apple
# Must be in seconds
  EnchantedGoldenApple: 3600
# This will be set if you use the bard powerup
# Must be in seconds
  BardEnergy: 3
# This will be used if you are equipping a class
# Must be in seconds
  ClassWarmupTime: 3
# This will be set if you die.
# Must be in seconds
  Deathban: 3600
# This will be set if you teleporting home.
# Must be in seconds
  TeleportHome: 10
# This will be set if you use the command
# Must be in seconds
  StuckTimer: 30
# This will be set if you use the command
# Must be in seconds
  Logout: 30
# Set the SOTW event length
# Must be in seconds
  SOTWDuration: 600
# Set the EOTW event length
# Must be in seconds
  EOTWDuration: 600
Default values:
# Sets the world, where the HCF server are.
  WorldName: world
# Sets the world spawn-point!
# Order: X,Y,Z,Pitch,Yaw (Separation with SPACE instead comma)
  SpawnLocation: 0.5 75 0.5 0 0
# Sets the end, where the HCF end are.
  EndOverworldLocation: 0.5 75 0.5 0 0
# Sets the end, where the HCF end are.
  EndName: world_the_end
# Sets the end, where the HCF end are.
  EndSpawn: 0.5 75 0 90 0
# Sets the nether, where the HCF nether are.
  NetherName: world_nether
# Sets the nether, where the HCF nether are.
  NetherSpawn: 0 0 0 0 0
# Sets the death-ban.
# Only ''true'' or ''false'' are accepted!
  DeathbanEnable: false
# Enables the spawn tp during SOTW mode.
  SOTWSpawnEnable: true
# Enchantment cost. Constant.
  EnchantCost: 20
# On the first join, this will be the player money.
  DefaultBalance: 1000
# Upon creating the first faction, this value will be the starting money in the faction.
  DefaultBalanceFaction: 0
# This sets the world border radius.
  WorldBorderSize: 1000
# This sets the war-zone radius.
  WarzoneSize: 500
# 
  BrewingSpeedMultiplier: 1
# 
  CookingSpeedMultiplier: 1
Kills:
# If the player dies, the current balance of the player will be transfered to the killer, or deleted.
  PlayerLoseMoney: true
# If the player kills, then this value will deposited into the killer account.
  AddMoneyOnKill: 1000
  DeathSignTitle: '&cDeath Sign'
  DeathSign:
  - '&5'
  - '&c%victim%'
  - '&fslain by'
  - '&a%killer%'
  - '&f%date%'
Claim:
  ClaimingWandTitle: '&6Claiming Wand'
  ClaimingWandLore:
  - '&eLeft and right click on the ground'
  - '&f➥ to place the positions.'
  - ' '
  - '&eShift + Right Click'
  - '&f➥ Accept the claim.'
  - ' '
  - '&eShift + Left Click'
  - '&f➥ Discard the claim.'
Faction DTR:
# The amount of DTR added by a player
  DTRPerPlayer: 0.9
# The maximum amount of DTR reached by a faction.
  MaxDTR: 5.5
# The maximum amount of DTR reached by a solo faction.
  MaxDTRSolo: 1.5
# DTR regeneration.(Must be in seconds)
  DTRRegen: 60
  DTRLowDTR: 0.25
  DTRColorRaidable: '&4'
  DTRColorLowDTR: '&e'
  DTRColorNormal: '&a'
  DTRSymbolFreeze: '&c■'
  DTRSymbolRegenerating: '&a▲'
  DTRSymbolNormal: '&a◀'
# The DTR will be decreased by this number,   when a member die.
  OverworldDeathDTR: 1
# The DTR will be decreased by this number, when a member die.
  NetherDeathDTR: 0.5
# The DTR will be decreased by this number, when a member die.
  EndDeathDTR: 1
Faction Points:
  PointStart: 0
  PointPerKill: 1
  PointPerKoth: 10
  EnablePointDecreaseOnDeath: true
  PointDecreaseOnDeath: 1
Faction Settings:
# This will let the player leave the faction,   while the player is inside the faction claim
  EnableLeaveFriendly: false
# Maximum member per faction.
  MaxMembers: 7
# Maximum allies per faction.
  MaxAllies: 2
  MinNameLength: 3
  MaxNameLength: 12
  DisabledCharactersInName:
  - $
  - ß
  - |
Faction Claim:
  MustBeConnected: true
  MaxClaims: 5
  MinClaimSize: 4
  MaxClaimSize: 50
# This value will let water flow in a claim. (But, it can still flow inside the claim, outside it will stop when it reaches the claim border)
  EnableFlowingToClaim: false
# (1$/Block) * Multiplier
  ClaimPriceMultiplier: 1.5
# (1$/Block) * Multiplier
  UnClaimPriceMultiplier: 0.5
# Allow liquid flow from wilderness to claimed land
  AllowDamageByWilderness: false
Colors:
  TeammateColor: '&a'
  AllyColor: '&d'
  EnemyColor: '&c'
  ArcherTagColor: '&4'
  FocusedTagColor: '&4'
  StaffModeColor: '&b'
# These words are blocked in names (Faction, rank etc.)
# No case-sensitive and it will be blocked when the word contains one of them!
BlackListedNames:
- example1
- example2
- badword

MountainEvent:
# Set Mountain event reset time
# Must be in seconds
  MountainEventReset: 3600
# Set Mountain event block type
  MountainEventMaterial: GLOWSTONE
# Select 2 location of the o
  MountainEventLocation1: 0 75 0
# Set Mountain event block type
  MountainEventLocation2: 15 80 15
Waypoints:
# Syntax: ''name; world; x, y, z; #hexcode''
  LunarWaypoints:
  - 'Spawn; world; 0, 75, 0; #FF0000'
  - 'End; world; 0, 75, 0; #FFFFFF'
  - 'End Exit; world_the_end; 0, 75, 0; #FFFFFF'
  HomeWaypoint: 'Home; #0000FF'
  RallyWaypoint: 'Rally; #FF0000'
  FocusWaypointColor: '#00FF00'
StatTrak:
# Should we enable weapons stattrak?
  StatTrakEnable: true
# Stattrak kills counter format
  StatTrakKillFormat: '&6&lKills&7: &b%kills%'
# Stattrak kill string
  StatTrakKillString: '&e%player% &fwas slain by &e%killer% &6%date%'
# Stattrak items
  StatTrakTrackingItems:
  - DIAMOND_SWORD
  - IRON_SWORD
  - STONE_SWORD
  - GOLD_SWORD
  - WOOD_SWORD
Crowbar:
  CrowbarMaterial: GOLD_HOE
  CrowbarName: '&3&lCrowbar'
  CrowbarLore:
  - '&5Spawners: &a{&c%scount%&a}'
  - '&5Portals: &a{&c%pcount%&a}'
  CrowbarSpawnerUses: 1
  CrowbarPortalUses: 6
  CrowbarDisabledInWarzone: false
SignShop:
  SignShopEnabled: true
  SignShopTitle_Buy: '&a[Buy]'
  SignShopTitle_Sell: '&c[Sell]'
Elevator:
  ElevatorEnabled: true
  ElevatorTitle: '&9[Elevator]'
SubClaim:
  SubClaimTitle: '&b[Subclaim]'
# Allows player which have lower ranks to open chests
  SubClaimAllowLowerRank: true
KoTH:
# Set the KoTH event length
# Must be in seconds
  KoTHDuration: 300
# Starts daily automatically a KoTH
# See ''Auto-KoTH'' section for more settings
  AutoKoTHEnabled: true
  KoTHSignTitle: '&6&nKoTH &r&6Sign'
  KoTHSign:
  - '&5'
  - '&9%koth%'
  - '&0capped by'
  - '&9%capturer%'
  - '%date%'
Auto-KoTH:
# Minimum online members to start a KoTH.
  KoTHMinOnline: 10
# Daily KoTH start date.
# When the auto KoTH starts, it will not overwrite the currently going KoTH
# The given time is converted to the set timezone!
# Make sure,you are using the right Timezone!
  KoTHStartDate:
  - '8:00'
  - '15:00'
```