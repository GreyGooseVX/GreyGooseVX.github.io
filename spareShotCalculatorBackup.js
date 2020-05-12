const spareShotProbability = 0.2
const magazineSize = 8
let effectiveMagazineSize = 0
let totalShotsFired = 0
const testRuns = 10000000
let spareShotRNG

for (let i = 1; i <= testRuns; i++) {
    for (let i = 1; i <= magazineSize;) {
        totalShotsFired++
        spareShotRNG = Math.random()
        if (spareShotRNG > spareShotProbability) { i++ }
    }

}
effectiveMagazineSize = totalShotsFired / testRuns
console.log(effectiveMagazineSize)