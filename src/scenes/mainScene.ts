import TextStyle = Phaser.GameObjects.Text.TextStyle;
import GameObject = Phaser.GameObjects.GameObject;

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("background", "./assets/image/background.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(350, 250, "background");

    let w = this.sys.canvas.width;
    let h = this.sys.canvas.height;

    let textConfig = {
        fontSize: 50,
        fontFamily: "Times New Roman",
        fill: "#ffffff",
    };

    // Really weird way to align text in the center. We have to draw it offscreen to get size, then reposition.
    let top = this.add.text(-1000, 40, "Freedom Defense:", textConfig);
    top.setX((w - top.width) / 2);

    textConfig = {
          fontSize: 25,
          fontFamily: "Times New Roman",
          fill: "#ffffff",
      };

    let snd = this.add.text(-1000, 50 + top.height, "Freedom isn't free!", textConfig);
    snd.setX((w - snd.width) / 2);

    // this.add.rectangle(300, 200, 100, 84, 0x0000FF);

    /*
            Title = new TextField();
        Title.textColor = 0xffffff;
        Title.selectable = false;
        Title.text = "Freedom Defense:";
        Title.autoSize = TextFieldAutoSize.LEFT;
        Title.scaleY = 5;
        Title.x = (stage.stageWidth / 2) - (Title.width / 2);
        Title.y = 40;
        Title.visible = true;
        addChild(Title);

        subTitle = new TextField();
        subTitle.textColor = 0xffffff;
        subTitle.selectable = false;
        subTitle.text = "Freedom isn't free!";
        subTitle.autoSize = TextFieldAutoSize.LEFT;
        subTitle.scaleY = 2.5;
        subTitle.x = (stage.stageWidth / 2) - (subTitle.width / 2);
        subTitle.y = 30 + (Title.height);
        subTitle.visible = true;
        addChild(subTitle);
     */

  }
}
