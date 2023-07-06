# NoEmoji userscript

The NoEmoji userscript installs a `nofont` font - generated from a fork of Adobe NotDef ([mchangrh/nofont](https://github.com/mchangrh/nofont))

All characters in the [SMP plane](https://en.wikipedia.org/wiki/Plane_(Unicode)) (10000-1FFFF range) are replaced with this undefined/blank font. This also includes some other language symbols.

The otf, woff and woff2 fonts are also generated in [require](../require)