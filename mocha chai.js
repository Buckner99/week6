var except = chai.expect;
let player1 = [1,2,3,4,5]
let player2 = [1,2,3,4,5]

describe('shuffle',function() {
    describe('#shuffle', function() {
        it('it should start game of war, and deal cards', function() {
            const x = player1;
            except(x).to.have.all.members(player2);
        });

        it('should throw an error if numbers are not at random', function() {
            except(function() {
                numberOfCards(player1).to.eql(player2);
            }).to.throw(Error);
        })
    });
});