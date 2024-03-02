const data = [
    { rank:'<img src="https://cdn-icons-png.flaticon.com/512/9143/9143755.png" alt="">1',brand: '<img src="https://www.pngall.com/wp-content/uploads/2016/04/Toyota-Logo-PNG-Clipart.png" alt="">TOYOTA' , reserve: '7,245'},
    { rank:2,brand: '<img src="./hondaok.png" alt="">HONDA' , reserve: '6,149'},
    { rank:3,brand: '<img src="./byddr.png" alt="">BYD' , reserve: '5,455'},
    { rank:4,brand: '<img src="https://scontent.fbkk29-4.fna.fbcdn.net/v/t39.30808-6/317822700_110112008601774_6676653681124427280_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=axdeGMl24aIAX_WiPMz&_nc_ht=scontent.fbkk29-4.fna&oh=00_AfA21L9xCwCoWzcJzQNp1RsIuHp-Q4NorQAel4R_t40dlQ&oe=65E55FAE" alt="">AION' , reserve: '4,568'},
    { rank:5,brand: '<img src="mgok.png" alt="">MG' , reserve: '3,568'},
    { rank:6,brand: '<img src="changanok.png" alt="">CHANGAN' , reserve: '3,549'},
    { rank:7,brand: '<img src="gwmmok.png" alt="">GWM' , reserve: '3,524'},
    { rank:8,brand: '<img src="isuzuok.png" alt="">ISUZU' , reserve: '2,460'},
    { rank:9,brand: '<img src="nissanok.png" alt="">NISSAN' , reserve: '2,459'},
    { rank:10,brand: '<img src="madzaok.png" alt="">MAZDA' , reserve: '1,961'},
];

function getAll(){
    return Promise.resolve(data);
}

module.exports = getAll;