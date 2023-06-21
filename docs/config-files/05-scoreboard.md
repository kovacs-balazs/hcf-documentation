---
id: scoreboard
sidebar_label: "Scoreboard"
---

# Scoreboard

***

```yaml
scoreboard_info:
  enabled: true
  title: '&6&lFactions &7| &7HCF' # If changer not enabled
  lines: '&7&m--------------------'
  lines_enabled: true

title_config:
  changer_enabled: true
  changer_title: 160 # Less for faster changing, more for slower changing
  # Create as many as you want
  changes:
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&6&lFactions &7| &7HCF'
    - '&e&lF&6&lactions &7| &7HCF'
    - '&6&lF&e&la&6&lctions &7| &7HCF'
    - '&6&lFa&e&lc&6&ltions &7| &7HCF'
    - '&6&lFac&e&lt&6&lions &7| &7HCF'
    - '&6&lFact&e&li&6&lons &7| &7HCF'
    - '&6&lFacti&e&lo&6&lns &7| &7HCF'
    - '&6&lFactio&e&ln&6&ls &7| &7HCF'
    - '&e&lFactions &7| &7HCF'

footer:
  enabled: true
  lines:
    - ''
    - '&7&owww.example.com'

KITS_INFO:
  - '&5&lStatistics'
  - '&dKills&7: &f%kills%'
  - '&dDeaths&7: &f%deaths%'
  - '&dBalance&7: &f$%balance%'

deathban_info:
  time: '&c&lDeathban&7: &c'
  lives: '&a&lLives&7: &c'

player_timers:
  faction: '&eFaction: &c'
  sotw: '&d&lSOTW&7: &c'
  sotw_off: '&d&l&mSOTW&r&7: &c'
  location: '&6&lClaim&7: &c'

  INVINCIBILITY: '&a&lInvincible&7: &c'
  pvp_timer: '&d&lPvP Timer&7: &c'
  combat_tag: '&c&lSpawn Tag&7: &c'
  ender_pearl: '&a&lEnderpearl&7: &c'
  apple: '&6&lApple&7: &c'
  gapple: '&e&lGapple&7: &c'
  stuck: '&3&lStuck&7: &c'
  home: '&6&lHome&7: &9'
  archer_tag: '&c&lArcher Tag&7: &c'
  class_warmup: '&a&lClass Warmup&7: &c'
  logout: '&4&lLogout&7: &c'
  active_class: '&7&lClass&7: &c'
  koth: '&l%koth%&7: &c'
  spawn: '&e&lSpawn&7: &c'
  ABILITIES: '' # %ability%&7: &c if you want per ability cooldown
  global_abilities: '&d&lPartner Item&7: &c'
  PRE_EOTW: '&4&lPRE-EOTW&7: &c'
  PURGE: '&4&lPurge&7: &c'
  FISHING_ROD: '&b&lFishing Rod&7: &c'
  APPLE_LIMIT: '&d&lApple Limit&7: &c%amount%/%max-amount%'

bard_class:
  bard_energy: ' &7* &4&lEnergy&7: &c'
  bard_cooldown: ' &7* &b&lCooldown&7: &c'

ghost_class:
  mode: '&3&lMode&7: &c'
  quartz: '&f&lQuartz&7: &c'

miner_class:
  invis: '&7&lInvisible&7: &c'
  diamonds: '&b&lDiamonds&7: &c'

CONQUEST:
  FORMAT_POINTS: '&e%team% &f- %points%'
  LINES:
    - '&7&m--------------------'
    - '&6&lConquest'
    - '&71. &f%points-1%'
    - '&72. &f%points-2%'
    - '&73. &f%points-3%'
    - '&7&m--------------------'
    - '&e■&7: &f%yellow% &c■&7: &f%red%'
    - '&a■&7: &f%green% &9■&7: &f%blue%'

KILL_THE_KING:
  ENABLED: true
  LINES:
    - '&4&lKing&7: &f%king%'
    - '&4&lReward&7: &f%reward%'
    - '&4&lHealth&7: &c%health%❤'
    - '&7&m--------------------'

rally:
  enabled: true
  lines:
    - '&7&m--------------------'
    - "&6Rally"
    - " &fWorld: %world%"
    - " &fPosition: %location%"

team_focus:
  enabled: true
  lines:
    - '&7&m--------------------'
    - '&6&lTeam&7: &f%team%'
    - ' &6&lDTR&7: &f%dtr%'
    - ' &6&lHome&7: &f%home%'
    - ' &6&lOnline&7: &f%online%'

staff_mode:
  enabled: true
  mod_mode:
    - '&5&lStaff Mode'
    - ' &f* &dVanished&7: &7%vanished%'
    - ' &f* &dPlayers&7: &7%players%'
    - ' &f* &dStaff Online&7: &7%staff%'
    - ' &f* &dTPS&7: &7%tps%'
    - '&7&m--------------------'

custom_timers:
  format: '%displayName%&7: &c'
```