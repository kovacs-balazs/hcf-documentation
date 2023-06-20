---
id: examples
sidebar_label: "Examples"
---
# Examples

***

### How to get Player's data?

```java
HCFPlayer hcfPlayer = HCFApi.getHCFPlayer(player);
```

### How to change the language of Player?

```java
HCFPlayer hcfPlayer = HCFApi.getHCFPlayer(player);
hcfPlayer.setLanguage(name); // The name  is end of the message file name. Eg. 'messages_en.yml' then name is 'en'
```

### How to get Player's faction?

```java
HCFPlayer hcfPlayer = HCFApi.getHCFPlayer(player);
Faction faction = hcfPlayer.getFaction();

// or

Faction faction = HCFApi.getFaction(player);
```

### How to get players in specific claim?

```java
List<Player> players = HCFApi.getPlayersInClaim(claim);
```

## Custom Timers

### How to create new timer?

```java
CustomTimer timer = new CustomTimer(name, time, text) // time in milliseconds
```